/*
  Warnings:

  - You are about to drop the column `user_id` on the `Account` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Account_user_id_key";

-- AlterTable
ALTER TABLE "Account" DROP COLUMN "user_id";
