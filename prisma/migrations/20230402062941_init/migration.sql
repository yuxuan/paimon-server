/*
  Warnings:

  - You are about to drop the column `applicationId` on the `Application` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `Application_applicationId_key` ON `Application`;

-- AlterTable
ALTER TABLE `Application` DROP COLUMN `applicationId`;
