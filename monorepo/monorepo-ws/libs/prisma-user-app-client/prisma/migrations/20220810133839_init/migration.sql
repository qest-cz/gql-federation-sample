/*
  Warnings:

  - You are about to drop the column `age` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `teacherId` on the `User` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `User` DROP FOREIGN KEY `User_teacherId_fkey`;

-- AlterTable
ALTER TABLE `User` DROP COLUMN `age`,
    DROP COLUMN `teacherId`;

-- CreateTable
CREATE TABLE `_UserFollows` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_UserFollows_AB_unique`(`A`, `B`),
    INDEX `_UserFollows_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_UserFollows` ADD CONSTRAINT `_UserFollows_A_fkey` FOREIGN KEY (`A`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_UserFollows` ADD CONSTRAINT `_UserFollows_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
