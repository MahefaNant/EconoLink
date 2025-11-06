/*
  Warnings:

  - A unique constraint covering the columns `[name,type,user_id]` on the table `accounts` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "public"."accounts_name_key";

-- CreateIndex
CREATE UNIQUE INDEX "unique_account_per_user_type_name" ON "accounts"("name", "type", "user_id");
