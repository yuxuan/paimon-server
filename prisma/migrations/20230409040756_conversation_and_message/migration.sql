/*
  Warnings:

  - You are about to alter the column `messageId` on the `Message` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Char(36)`.
  - Added the required column `applicationId` to the `Conversation` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Message_conversationId_idx` ON `Message`;

-- DropIndex
DROP INDEX `Message_createdAt_idx` ON `Message`;

-- DropIndex
DROP INDEX `Message_messageId_idx` ON `Message`;

-- AlterTable
ALTER TABLE `Conversation` ADD COLUMN `applicationId` VARCHAR(191) NOT NULL,
    MODIFY `prompt` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `user` VARCHAR(191) NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE `Message` MODIFY `messageId` CHAR(36) NOT NULL;

-- AddForeignKey
ALTER TABLE `Conversation` ADD CONSTRAINT `Conversation_applicationId_fkey` FOREIGN KEY (`applicationId`) REFERENCES `Application`(`applicationId`) ON DELETE RESTRICT ON UPDATE CASCADE;
