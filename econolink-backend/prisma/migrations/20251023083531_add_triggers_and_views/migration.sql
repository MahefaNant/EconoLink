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
-- TRIGGER POUR METTRE À JOUR LES SOLDES
-- =============================================

CREATE OR REPLACE FUNCTION update_account_balance()
RETURNS TRIGGER AS $$
BEGIN
    -- Mettre à jour le solde du compte source
    UPDATE accounts 
    SET balance = balance + NEW.amount,
        updated_at = NOW()
    WHERE id = NEW.account_id;
    
    -- Pour les transferts, mettre à jour aussi le compte destination
    IF NEW.type = 'TRANSFER' AND NEW.to_account_id IS NOT NULL THEN
        UPDATE accounts 
        SET balance = balance - NEW.amount,
            updated_at = NOW()
        WHERE id = NEW.to_account_id;
    END IF;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER trigger_update_balance 
    AFTER INSERT ON transactions 
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
