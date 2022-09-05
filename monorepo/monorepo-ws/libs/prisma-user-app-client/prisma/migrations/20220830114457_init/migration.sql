-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `age` INTEGER NOT NULL,
    `married` BOOLEAN NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `FriendShip` (
    `friendOfId` INTEGER NOT NULL,
    `friendWithId` INTEGER NOT NULL,

    PRIMARY KEY (`friendWithId`, `friendOfId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `FriendShip` ADD CONSTRAINT `FriendShip_friendOfId_fkey` FOREIGN KEY (`friendOfId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FriendShip` ADD CONSTRAINT `FriendShip_friendWithId_fkey` FOREIGN KEY (`friendWithId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
