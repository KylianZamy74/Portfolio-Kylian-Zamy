/*
  Warnings:

  - Added the required column `role_date` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "role_date" TEXT NOT NULL;
