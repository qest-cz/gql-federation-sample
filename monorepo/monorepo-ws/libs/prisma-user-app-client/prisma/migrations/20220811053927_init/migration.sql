/*
  Warnings:

  - You are about to drop the `_UserFollows` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `age` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `married` to the `User` table without a default value. This is not possible if the table is not empty.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `_UserFollows` DROP FOREIGN KEY `_UserFollows_A_fkey`;

-- DropForeignKey
ALTER TABLE `_UserFollows` DROP FOREIGN KEY `_UserFollows_B_fkey`;

-- AlterTable
ALTER TABLE `User` ADD COLUMN `age` INTEGER NOT NULL,
    ADD COLUMN `married` BOOLEAN NOT NULL,
    MODIFY `name` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `_UserFollows`;

-- CreateTable
CREATE TABLE `Friends` (
    `friendWithId` INTEGER NOT NULL,
    `friendOfId` INTEGER NOT NULL,

    PRIMARY KEY (`friendWithId`, `friendOfId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Friends` ADD CONSTRAINT `Friends_friendWithId_fkey` FOREIGN KEY (`friendWithId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Friends` ADD CONSTRAINT `Friends_friendOfId_fkey` FOREIGN KEY (`friendOfId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
