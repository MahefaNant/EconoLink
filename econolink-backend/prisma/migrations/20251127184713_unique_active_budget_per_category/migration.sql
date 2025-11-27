/*
  Warnings:

  - A unique constraint covering the columns `[user_id,category_id]` on the table `budgets` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "unique_active_budget_per_category" ON "budgets"("user_id", "category_id");
