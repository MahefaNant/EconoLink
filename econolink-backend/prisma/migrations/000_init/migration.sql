-- CreateEnum
CREATE TYPE "account_type" AS ENUM ('CASH', 'BANK_ACCOUNT', 'CREDIT_CARD', 'SAVINGS', 'INVESTMENT', 'OTHER');

-- CreateEnum
CREATE TYPE "budget_period" AS ENUM ('WEEKLY', 'MONTHLY', 'QUARTERLY', 'YEARLY');

-- CreateEnum
CREATE TYPE "recurring_frequency" AS ENUM ('DAILY', 'WEEKLY', 'MONTHLY', 'YEARLY');

-- CreateEnum
CREATE TYPE "transaction_type" AS ENUM ('INCOME', 'EXPENSE', 'TRANSFER');

-- CreateTable
CREATE TABLE "accounts" (
    "id" VARCHAR(50) NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR(100) NOT NULL,
    "type" "account_type" NOT NULL,
    "balance" DECIMAL(15,2) DEFAULT 0.00,
    "color" VARCHAR(7) DEFAULT '#3B82F6',
    "icon" VARCHAR(10) DEFAULT '💰',
    "is_active" BOOLEAN DEFAULT true,
    "user_id" VARCHAR(50) NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "accounts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "budgets" (
    "id" VARCHAR(50) NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR(100) NOT NULL,
    "amount" DECIMAL(15,2) NOT NULL,
    "period" "budget_period" DEFAULT 'MONTHLY',
    "start_date" TIMESTAMPTZ(6) NOT NULL,
    "end_date" TIMESTAMPTZ(6),
    "spent" DECIMAL(15,2) DEFAULT 0.00,
    "alert_at" DECIMAL(5,2),
    "category_id" VARCHAR(50),
    "user_id" VARCHAR(50) NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "budgets_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "categories" (
    "id" VARCHAR(50) NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "color" VARCHAR(7) DEFAULT '#6B7280',
    "icon" VARCHAR(10) DEFAULT '📁',
    "type" "transaction_type" NOT NULL,
    "parent_id" VARCHAR(50),
    "user_id" VARCHAR(50) NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "goals" (
    "id" VARCHAR(50) NOT NULL DEFAULT gen_random_uuid(),
    "name" VARCHAR(100) NOT NULL,
    "description" TEXT,
    "target" DECIMAL(15,2) NOT NULL,
    "current" DECIMAL(15,2) DEFAULT 0.00,
    "deadline" TIMESTAMPTZ(6),
    "color" VARCHAR(7) DEFAULT '#10B981',
    "icon" VARCHAR(10) DEFAULT '🎯',
    "auto_transfer" BOOLEAN DEFAULT false,
    "transfer_account_id" VARCHAR(50),
    "user_id" VARCHAR(50) NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "goals_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "reminders" (
    "id" VARCHAR(50) NOT NULL DEFAULT gen_random_uuid(),
    "title" VARCHAR(200) NOT NULL,
    "description" TEXT,
    "due_date" TIMESTAMPTZ(6) NOT NULL,
    "is_completed" BOOLEAN DEFAULT false,
    "is_recurring" BOOLEAN DEFAULT false,
    "recurring_rule" JSONB,
    "user_id" VARCHAR(50) NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "reminders_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "sync_states" (
    "id" VARCHAR(50) NOT NULL DEFAULT gen_random_uuid(),
    "user_id" VARCHAR(50) NOT NULL,
    "last_sync" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "pending_ops" JSONB,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "sync_states_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "transactions" (
    "id" VARCHAR(50) NOT NULL DEFAULT gen_random_uuid(),
    "amount" DECIMAL(15,2) NOT NULL,
    "description" VARCHAR(500) NOT NULL,
    "date" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "type" "transaction_type" NOT NULL,
    "notes" TEXT,
    "location" VARCHAR(255),
    "receipt_image" VARCHAR(500),
    "is_recurring" BOOLEAN DEFAULT false,
    "recurring_id" VARCHAR(50),
    "recurring_rule" JSONB,
    "account_id" VARCHAR(50) NOT NULL,
    "to_account_id" VARCHAR(50),
    "category_id" VARCHAR(50),
    "user_id" VARCHAR(50) NOT NULL,
    "local_id" VARCHAR(100),
    "is_synced" BOOLEAN DEFAULT true,
    "last_sync_at" TIMESTAMPTZ(6),
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "transactions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "users" (
    "id" VARCHAR(50) NOT NULL DEFAULT gen_random_uuid(),
    "email" VARCHAR(255) NOT NULL,
    "name" VARCHAR(100),
    "password" VARCHAR(255) NOT NULL,
    "avatar" VARCHAR(500),
    "currency" VARCHAR(3) DEFAULT 'AR',
    "language" VARCHAR(10) DEFAULT 'EN',
    "timezone" VARCHAR(50) DEFAULT 'Indian/Antananarivo',
    "theme" VARCHAR(20) DEFAULT 'light',
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "accounts_name_key" ON "accounts"("name");

-- CreateIndex
CREATE INDEX "idx_accounts_user" ON "accounts"("user_id");

-- CreateIndex
CREATE INDEX "idx_budgets_user_period" ON "budgets"("user_id", "start_date", "end_date");

-- CreateIndex
CREATE UNIQUE INDEX "categories_name_key" ON "categories"("name");

-- CreateIndex
CREATE INDEX "idx_categories_user_type" ON "categories"("user_id", "type");

-- CreateIndex
CREATE INDEX "idx_goals_user_deadline" ON "goals"("user_id", "deadline");

-- CreateIndex
CREATE INDEX "idx_reminders_user_due" ON "reminders"("user_id", "due_date");

-- CreateIndex
CREATE UNIQUE INDEX "sync_states_user_id_key" ON "sync_states"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "transactions_local_id_key" ON "transactions"("local_id");

-- CreateIndex
CREATE INDEX "idx_transactions_account_date" ON "transactions"("account_id", "date" DESC);

-- CreateIndex
CREATE INDEX "idx_transactions_category_user" ON "transactions"("category_id", "user_id");

-- CreateIndex
CREATE INDEX "idx_transactions_type_date" ON "transactions"("type", "date");

-- CreateIndex
CREATE INDEX "idx_transactions_user_date" ON "transactions"("user_id", "date" DESC);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "accounts" ADD CONSTRAINT "accounts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "budgets" ADD CONSTRAINT "budgets_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "budgets" ADD CONSTRAINT "budgets_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "categories" ADD CONSTRAINT "categories_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "goals" ADD CONSTRAINT "goals_transfer_account_id_fkey" FOREIGN KEY ("transfer_account_id") REFERENCES "accounts"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "goals" ADD CONSTRAINT "goals_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "reminders" ADD CONSTRAINT "reminders_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "sync_states" ADD CONSTRAINT "sync_states_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_account_id_fkey" FOREIGN KEY ("account_id") REFERENCES "accounts"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_category_id_fkey" FOREIGN KEY ("category_id") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_to_account_id_fkey" FOREIGN KEY ("to_account_id") REFERENCES "accounts"("id") ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "transactions" ADD CONSTRAINT "transactions_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE NO ACTION;

