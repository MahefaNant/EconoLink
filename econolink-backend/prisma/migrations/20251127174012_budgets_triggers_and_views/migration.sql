-- =============================================
-- MIGRATION POUR GESTION DES CHEVAUCHEMENTS DE BUDGETS
-- =============================================

-- 1. SUPPRIMER L'ANCIENNE CONTRAINTE D'UNICITÉ SI ELLE EXISTE
ALTER TABLE budgets DROP CONSTRAINT IF EXISTS unique_active_budget_per_category;

-- =============================================
-- FONCTION POUR VÉRIFIER LES CHEVAUCHEMENTS DE BUDGETS
-- =============================================

CREATE OR REPLACE FUNCTION check_budget_overlap()
RETURNS TRIGGER AS $$
BEGIN
    -- Vérifier s'il existe un budget actif pour la même catégorie qui chevauche les dates
    IF EXISTS (
        SELECT 1 FROM budgets 
        WHERE user_id = NEW.user_id 
        AND category_id = NEW.category_id
        AND id != COALESCE(NEW.id, '00000000-0000-0000-0000-000000000000') -- Pour éviter le conflit avec soi-même lors des updates
        AND (
            -- Cas 1: Le nouveau budget commence pendant un budget existant
            (NEW.start_date BETWEEN start_date AND COALESCE(end_date, 'infinity'::date))
            OR
            -- Cas 2: Le nouveau budget se termine pendant un budget existant  
            (COALESCE(NEW.end_date, 'infinity'::date) BETWEEN start_date AND COALESCE(end_date, 'infinity'::date))
            OR
            -- Cas 3: Un budget existant commence pendant le nouveau budget
            (start_date BETWEEN NEW.start_date AND COALESCE(NEW.end_date, 'infinity'::date))
            OR
            -- Cas 4: Les deux budgets sont infinis (sans end_date)
            (NEW.end_date IS NULL AND end_date IS NULL)
        )
    ) THEN
        RAISE EXCEPTION 'Un budget actif existe déjà pour cette catégorie pendant cette période';
    END IF;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- =============================================
-- CRÉATION DU TRIGGER ANTI-CHEVAUCHEMENT
-- =============================================

DROP TRIGGER IF EXISTS trigger_check_budget_overlap ON budgets;

CREATE TRIGGER trigger_check_budget_overlap
    BEFORE INSERT OR UPDATE ON budgets
    FOR EACH ROW EXECUTE FUNCTION check_budget_overlap();

-- =============================================
-- FONCTION AMÉLIORÉE POUR BUDGETS AVEC PÉRIODES (EXISTANTE - GARDER)
-- =============================================

CREATE OR REPLACE FUNCTION update_budget_spent_advanced()
RETURNS TRIGGER AS $$
BEGIN
    -- CAS 1: INSERT (Nouvelle transaction)
    IF TG_OP = 'INSERT' THEN
        IF NEW.type = 'EXPENSE' AND NEW.category_id IS NOT NULL THEN
            UPDATE budgets 
            SET spent = spent + NEW.amount,
                updated_at = NOW()
            WHERE category_id = NEW.category_id 
              AND user_id = NEW.user_id
              AND start_date <= NEW.date
              AND (end_date IS NULL OR end_date >= NEW.date);
        END IF;
        RETURN NEW;
    
    -- CAS 2: UPDATE (Modification d'une transaction)
    ELSIF TG_OP = 'UPDATE' THEN
        -- Annuler l'ancienne
        IF OLD.type = 'EXPENSE' AND OLD.category_id IS NOT NULL THEN
            UPDATE budgets 
            SET spent = spent - OLD.amount,
                updated_at = NOW()
            WHERE category_id = OLD.category_id 
              AND user_id = OLD.user_id
              AND start_date <= OLD.date
              AND (end_date IS NULL OR end_date >= OLD.date);
        END IF;
        
        -- Appliquer la nouvelle
        IF NEW.type = 'EXPENSE' AND NEW.category_id IS NOT NULL THEN
            UPDATE budgets 
            SET spent = spent + NEW.amount,
                updated_at = NOW()
            WHERE category_id = NEW.category_id 
              AND user_id = NEW.user_id
              AND start_date <= NEW.date
              AND (end_date IS NULL OR end_date >= NEW.date);
        END IF;
        RETURN NEW;
    
    -- CAS 3: DELETE (Suppression d'une transaction)
    ELSIF TG_OP = 'DELETE' THEN
        IF OLD.type = 'EXPENSE' AND OLD.category_id IS NOT NULL THEN
            UPDATE budgets 
            SET spent = spent - OLD.amount,
                updated_at = NOW()
            WHERE category_id = OLD.category_id 
              AND user_id = OLD.user_id
              AND start_date <= OLD.date
              AND (end_date IS NULL OR end_date >= OLD.date);
        END IF;
        RETURN OLD;
    END IF;
    
    RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- =============================================
-- CRÉATION DES TRIGGERS (EXISTANTS - GARDER)
-- =============================================

DROP TRIGGER IF EXISTS trigger_update_budget_spent_insert ON transactions;
DROP TRIGGER IF EXISTS trigger_update_budget_spent_update ON transactions;
DROP TRIGGER IF EXISTS trigger_update_budget_spent_delete ON transactions;

CREATE TRIGGER trigger_update_budget_spent_insert
    AFTER INSERT ON transactions 
    FOR EACH ROW EXECUTE FUNCTION update_budget_spent_advanced();

CREATE TRIGGER trigger_update_budget_spent_update
    AFTER UPDATE ON transactions 
    FOR EACH ROW EXECUTE FUNCTION update_budget_spent_advanced();

CREATE TRIGGER trigger_update_budget_spent_delete
    AFTER DELETE ON transactions 
    FOR EACH ROW EXECUTE FUNCTION update_budget_spent_advanced();

-- =============================================
-- MISE À JOUR DE LA VUE BUDGET_STATUS (EXISTANTE - GARDER)
-- =============================================

DROP VIEW IF EXISTS budget_status;

CREATE VIEW budget_status AS
SELECT 
    b.*,
    c.name as category_name,
    CASE 
        WHEN b.amount > 0 THEN (b.spent / b.amount * 100)
        ELSE 0 
    END as percentage_used,
    CASE 
        WHEN b.amount > 0 AND (b.spent / b.amount * 100) >= 100 THEN 'EXCEEDED'
        WHEN b.amount > 0 AND b.alert_at IS NOT NULL AND (b.spent / b.amount * 100) >= b.alert_at THEN 'ALERT'
        ELSE 'NORMAL'
    END as status
FROM budgets b
LEFT JOIN categories c ON b.category_id = c.id
WHERE b.end_date IS NULL OR b.end_date >= CURRENT_DATE;

-- =============================================
-- RECALCUL DES SPENT EXISTANTS (EXISTANT - GARDER)
-- =============================================

UPDATE budgets b 
SET spent = COALESCE((
    SELECT SUM(amount) 
    FROM transactions t 
    WHERE t.category_id = b.category_id 
      AND t.user_id = b.user_id 
      AND t.type = 'EXPENSE'
      AND t.date >= b.start_date 
      AND (b.end_date IS NULL OR t.date <= b.end_date)
), 0),
updated_at = NOW();

-- =============================================
-- VÉRIFICATION DES BUDGETS EXISTANTS
-- =============================================

-- Vérifier s'il y a des chevauchements dans les budgets existants
SELECT 
    b1.id as budget1_id,
    b1.name as budget1_name,
    b1.start_date as budget1_start,
    b1.end_date as budget1_end,
    b2.id as budget2_id, 
    b2.name as budget2_name,
    b2.start_date as budget2_start,
    b2.end_date as budget2_end
FROM budgets b1
JOIN budgets b2 ON b1.category_id = b2.category_id 
    AND b1.user_id = b2.user_id 
    AND b1.id != b2.id
WHERE (
    (b1.start_date BETWEEN b2.start_date AND COALESCE(b2.end_date, 'infinity'::date))
    OR (COALESCE(b1.end_date, 'infinity'::date) BETWEEN b2.start_date AND COALESCE(b2.end_date, 'infinity'::date))
    OR (b2.start_date BETWEEN b1.start_date AND COALESCE(b1.end_date, 'infinity'::date))
    OR (b1.end_date IS NULL AND b2.end_date IS NULL)
);

-- =============================================
-- TEST DU SYSTÈME
-- =============================================

-- Test 1: Vérifier que le trigger anti-chevauchenent fonctionne
/*
-- DOIT FONCTIONNER (dates différentes)
INSERT INTO budgets (name, amount, category_id, user_id, start_date, end_date) 
VALUES ('Test Budget 1', 500, 'cat-food', 'user-1', '2025-11-24', '2025-11-25');

-- DOIT FONCTIONNER (après la fin du premier)
INSERT INTO budgets (name, amount, category_id, user_id, start_date, end_date) 
VALUES ('Test Budget 2', 600, 'cat-food', 'user-1', '2025-11-28', NULL);

-- DOIT ÉCHOUER (chevauchement)
INSERT INTO budgets (name, amount, category_id, user_id, start_date, end_date) 
VALUES ('Test Budget 3', 700, 'cat-food', 'user-1', '2025-11-25', '2025-11-29');
*/

-- Test 2: Vérifier que le trigger de spent fonctionne
/*
INSERT INTO transactions (user_id, account_id, category_id, type, amount, date, description) 
VALUES (
    'user-1', 
    (SELECT id FROM accounts WHERE user_id = 'user-1' LIMIT 1), 
    'cat-food', 
    'EXPENSE', 
    75.00, 
    CURRENT_DATE, 
    'Test trigger budget'
);

-- Vérifier que le spent a été mis à jour sur le bon budget
SELECT name, amount, spent, (spent/amount*100) as percentage_used 
FROM budget_status 
WHERE category_id = 'cat-food' AND start_date <= CURRENT_DATE;
*/

-- =============================================
-- VUE POUR VOIR TOUS LES BUDGETS (ACTIFS ET INACTIFS)
-- =============================================

CREATE OR REPLACE VIEW all_budgets_with_status AS
SELECT 
    b.*,
    c.name as category_name,
    CASE 
        WHEN b.amount > 0 THEN (b.spent / b.amount * 100)
        ELSE 0 
    END as percentage_used,
    CASE 
        WHEN b.end_date < CURRENT_DATE THEN 'EXPIRED'
        WHEN b.amount > 0 AND (b.spent / b.amount * 100) >= 100 THEN 'EXCEEDED'
        WHEN b.amount > 0 AND b.alert_at IS NOT NULL AND (b.spent / b.amount * 100) >= b.alert_at THEN 'ALERT'
        ELSE 'NORMAL'
    END as status,
    CASE 
        WHEN b.end_date < CURRENT_DATE THEN false
        ELSE true
    END as is_active
FROM budgets b
LEFT JOIN categories c ON b.category_id = c.id
ORDER BY b.start_date DESC;