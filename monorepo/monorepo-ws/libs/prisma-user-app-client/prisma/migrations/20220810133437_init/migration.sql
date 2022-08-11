/*
  Warnings:

  - You are about to drop the column `married` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `FriendShip` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE `User` DROP COLUMN `married`,
    ADD COLUMN `teacherId` INTEGER NULL,
    MODIFY `name` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `FriendShip`;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_teacherId_fkey` FOREIGN KEY (`teacherId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
