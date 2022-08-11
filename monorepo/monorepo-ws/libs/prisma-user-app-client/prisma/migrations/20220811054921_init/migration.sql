/*
  Warnings:

  - You are about to drop the `Friends` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `Friends` DROP FOREIGN KEY `Friends_friendOfId_fkey`;

-- DropForeignKey
ALTER TABLE `Friends` DROP FOREIGN KEY `Friends_friendWithId_fkey`;

-- DropTable
DROP TABLE `Friends`;

-- CreateTable
CREATE TABLE `FriendShip` (
    `friendWithId` INTEGER NOT NULL,
    `friendOfId` INTEGER NOT NULL,

    PRIMARY KEY (`friendWithId`, `friendOfId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `FriendShip` ADD CONSTRAINT `FriendShip_friendWithId_fkey` FOREIGN KEY (`friendWithId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FriendShip` ADD CONSTRAINT `FriendShip_friendOfId_fkey` FOREIGN KEY (`friendOfId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
