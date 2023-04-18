/*
  Warnings:

  - A unique constraint covering the columns `[applicationId]` on the table `Application` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `applicationId` to the `Application` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Application` ADD COLUMN `applicationId` CHAR(36) NOT NULL,
    MODIFY `description` VARCHAR(191) NOT NULL DEFAULT '';

-- CreateIndex
CREATE UNIQUE INDEX `Application_applicationId_key` ON `Application`(`applicationId`);
