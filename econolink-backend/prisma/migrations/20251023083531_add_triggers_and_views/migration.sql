-- This is an empty migration.-- =============================================

-- =============================================
-- FONCTION POUR METTRE À JOUR updated_at
-- =============================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- TRIGGERS POUR updated_at
-- =============================================

CREATE TRIGGER update_users_updated_at 
    BEFORE UPDATE ON users 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_accounts_updated_at 
    BEFORE UPDATE ON accounts 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_categories_updated_at 
    BEFORE UPDATE ON categories 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_transactions_updated_at 
    BEFORE UPDATE ON transactions 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_budgets_updated_at 
    BEFORE UPDATE ON budgets 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_goals_updated_at 
    BEFORE UPDATE ON goals 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_sync_states_updated_at 
    BEFORE UPDATE ON sync_states 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_reminders_updated_at 
    BEFORE UPDATE ON reminders 
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- =============================================
-- SUPPRESSION DES ANCIENS TRIGGERS ET FONCTION
-- =============================================

DROP TRIGGER IF EXISTS trigger_update_balance_insert ON transactions;
DROP TRIGGER IF EXISTS trigger_update_balance_update ON transactions;
DROP TRIGGER IF EXISTS trigger_update_balance_delete ON transactions;
DROP FUNCTION IF EXISTS update_account_balance();

-- =============================================
-- NOUVELLE FONCTION CORRIGÉE POUR TOUTES LES OPÉRATIONS
-- =============================================

CREATE OR REPLACE FUNCTION update_account_balance()
RETURNS TRIGGER AS $$
BEGIN
    -- CAS 1: INSERT (Nouvelle transaction)
    IF TG_OP = 'INSERT' THEN
        -- Pour INCOME: augmenter le balance du compte
        IF NEW.type = 'INCOME' THEN
            UPDATE accounts 
            SET balance = balance + NEW.amount,
                updated_at = NOW()
            WHERE id = NEW.account_id;
        
        -- Pour EXPENSE: diminuer le balance du compte
        ELSIF NEW.type = 'EXPENSE' THEN
            UPDATE accounts 
            SET balance = balance - NEW.amount,
                updated_at = NOW()
            WHERE id = NEW.account_id;
        
        -- Pour TRANSFER: diminuer le compte source, augmenter le compte destination
        ELSIF NEW.type = 'TRANSFER' AND NEW.to_account_id IS NOT NULL THEN
            -- Diminuer le compte source
            UPDATE accounts 
            SET balance = balance - NEW.amount,
                updated_at = NOW()
            WHERE id = NEW.account_id;
            
            -- Augmenter le compte destination
            UPDATE accounts 
            SET balance = balance + NEW.amount,
                updated_at = NOW()
            WHERE id = NEW.to_account_id;
        END IF;
        RETURN NEW;
    
    -- CAS 2: UPDATE (Modification d'une transaction existante)
    ELSIF TG_OP = 'UPDATE' THEN
        -- D'abord annuler l'ancienne transaction (comme un DELETE)
        IF OLD.type = 'INCOME' THEN
            UPDATE accounts 
            SET balance = balance - OLD.amount,
                updated_at = NOW()
            WHERE id = OLD.account_id;
        
        ELSIF OLD.type = 'EXPENSE' THEN
            UPDATE accounts 
            SET balance = balance + OLD.amount,
                updated_at = NOW()
            WHERE id = OLD.account_id;
        
        ELSIF OLD.type = 'TRANSFER' AND OLD.to_account_id IS NOT NULL THEN
            -- Rétablir le compte source
            UPDATE accounts 
            SET balance = balance + OLD.amount,
                updated_at = NOW()
            WHERE id = OLD.account_id;
            
            -- Rétablir le compte destination
            UPDATE accounts 
            SET balance = balance - OLD.amount,
                updated_at = NOW()
            WHERE id = OLD.to_account_id;
        END IF;
        
        -- Puis appliquer la nouvelle transaction (comme un INSERT)
        IF NEW.type = 'INCOME' THEN
            UPDATE accounts 
            SET balance = balance + NEW.amount,
                updated_at = NOW()
            WHERE id = NEW.account_id;
        
        ELSIF NEW.type = 'EXPENSE' THEN
            UPDATE accounts 
            SET balance = balance - NEW.amount,
                updated_at = NOW()
            WHERE id = NEW.account_id;
        
        ELSIF NEW.type = 'TRANSFER' AND NEW.to_account_id IS NOT NULL THEN
            -- Diminuer le compte source
            UPDATE accounts 
            SET balance = balance - NEW.amount,
                updated_at = NOW()
            WHERE id = NEW.account_id;
            
            -- Augmenter le compte destination
            UPDATE accounts 
            SET balance = balance + NEW.amount,
                updated_at = NOW()
            WHERE id = NEW.to_account_id;
        END IF;
        RETURN NEW;
    
    -- CAS 3: DELETE (Suppression d'une transaction)
    ELSIF TG_OP = 'DELETE' THEN
        IF OLD.type = 'INCOME' THEN
            UPDATE accounts 
            SET balance = balance - OLD.amount,
                updated_at = NOW()
            WHERE id = OLD.account_id;
        
        ELSIF OLD.type = 'EXPENSE' THEN
            UPDATE accounts 
            SET balance = balance + OLD.amount,
                updated_at = NOW()
            WHERE id = OLD.account_id;
        
        ELSIF OLD.type = 'TRANSFER' AND OLD.to_account_id IS NOT NULL THEN
            -- Rétablir le compte source
            UPDATE accounts 
            SET balance = balance + OLD.amount,
                updated_at = NOW()
            WHERE id = OLD.account_id;
            
            -- Rétablir le compte destination
            UPDATE accounts 
            SET balance = balance - OLD.amount,
                updated_at = NOW()
            WHERE id = OLD.to_account_id;
        END IF;
        RETURN OLD;
    END IF;
    
    RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- =============================================
-- CRÉATION DES TROIS TRIGGERS
-- =============================================

-- Trigger pour INSERT
CREATE TRIGGER trigger_update_balance_insert
    AFTER INSERT ON transactions 
    FOR EACH ROW EXECUTE FUNCTION update_account_balance();

-- Trigger pour UPDATE
CREATE TRIGGER trigger_update_balance_update
    AFTER UPDATE ON transactions 
    FOR EACH ROW EXECUTE FUNCTION update_account_balance();

-- Trigger pour DELETE
CREATE TRIGGER trigger_update_balance_delete
    AFTER DELETE ON transactions 
    FOR EACH ROW EXECUTE FUNCTION update_account_balance();

-- =============================================
-- VUES UTILES
-- =============================================

-- Vue pour le résumé mensuel
CREATE VIEW monthly_summary AS
SELECT 
    user_id,
    DATE_TRUNC('month', date) as month,
    type,
    category_id,
    COUNT(*) as transaction_count,
    SUM(amount) as total_amount,
    AVG(amount) as average_amount
FROM transactions 
GROUP BY user_id, DATE_TRUNC('month', date), type, category_id;

-- Vue pour le statut des budgets
CREATE VIEW budget_status AS
SELECT 
    b.*,
    c.name as category_name,
    (b.spent / b.amount * 100) as percentage_used,
    CASE 
        WHEN (b.spent / b.amount * 100) >= 100 THEN 'EXCEEDED'
        WHEN (b.spent / b.amount * 100) >= b.alert_at THEN 'ALERT'
        ELSE 'NORMAL'
    END as status
FROM budgets b
LEFT JOIN categories c ON b.category_id = c.id
WHERE b.end_date IS NULL OR b.end_date >= CURRENT_DATE;

-- =============================================
-- RECALCUL COMPLET DE TOUTES LES BALANCES
-- =============================================

DO $$
DECLARE
    account_record RECORD;
    calculated_balance DECIMAL(15,2);
BEGIN
    FOR account_record IN SELECT id FROM accounts LOOP
        -- Calculer le balance basé sur toutes les transactions
        SELECT COALESCE(SUM(
            CASE 
                WHEN type = 'INCOME' THEN amount
                WHEN type = 'EXPENSE' THEN -amount
                WHEN type = 'TRANSFER' AND account_id = account_record.id THEN -amount
                WHEN type = 'TRANSFER' AND to_account_id = account_record.id THEN amount
                ELSE 0
            END
        ), 0)
        INTO calculated_balance
        FROM transactions
        WHERE account_id = account_record.id OR to_account_id = account_record.id;
        
        -- Mettre à jour le balance du compte
        UPDATE accounts 
        SET balance = calculated_balance,
            updated_at = NOW()
        WHERE id = account_record.id;
        
        RAISE NOTICE 'Compte %: balance recalculée à %', account_record.id, calculated_balance;
    END LOOP;
END $$;

-- =============================================
-- VÉRIFICATION DES BALANCES
-- =============================================

SELECT 
    a.id as account_id,
    a.name as account_name,
    a.balance as current_balance,
    (
        SELECT COALESCE(SUM(
            CASE 
                WHEN t.type = 'INCOME' THEN t.amount
                WHEN t.type = 'EXPENSE' THEN -t.amount
                WHEN t.type = 'TRANSFER' AND t.account_id = a.id THEN -t.amount
                WHEN t.type = 'TRANSFER' AND t.to_account_id = a.id THEN t.amount
                ELSE 0
            END
        ), 0)
        FROM transactions t
        WHERE t.account_id = a.id OR t.to_account_id = a.id
    ) as calculated_balance,
    a.balance - (
        SELECT COALESCE(SUM(
            CASE 
                WHEN t.type = 'INCOME' THEN t.amount
                WHEN t.type = 'EXPENSE' THEN -t.amount
                WHEN t.type = 'TRANSFER' AND t.account_id = a.id THEN -t.amount
                WHEN t.type = 'TRANSFER' AND t.to_account_id = a.id THEN t.amount
                ELSE 0
            END
        ), 0)
        FROM transactions t
        WHERE t.account_id = a.id OR t.to_account_id = a.id
    ) as difference
FROM accounts a;
