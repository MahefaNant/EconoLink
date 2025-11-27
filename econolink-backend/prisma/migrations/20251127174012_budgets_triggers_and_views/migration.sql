-- This is an empty migration.-- =============================================
-- FONCTION AMÉLIORÉE POUR BUDGETS AVEC PÉRIODES
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
-- CRÉATION DES TRIGGERS
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
-- MISE À JOUR DE LA VUE BUDGET_STATUS
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
-- RECALCUL DES SPENT EXISTANTS
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
-- VÉRIFICATION
-- =============================================

SELECT 
    b.id,
    b.name,
    b.amount,
    b.spent,
    (b.spent / b.amount * 100) as percentage_used,
    b.status
FROM budget_status b;