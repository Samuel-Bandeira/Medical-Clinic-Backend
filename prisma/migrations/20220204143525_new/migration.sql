/*
  Warnings:

  - You are about to drop the column `endH` on the `Schedule` table. All the data in the column will be lost.
  - You are about to drop the column `startH` on the `Schedule` table. All the data in the column will be lost.
  - Added the required column `endHour` to the `Schedule` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startHour` to the `Schedule` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Schedule` DROP COLUMN `endH`,
    DROP COLUMN `startH`,
    ADD COLUMN `endHour` DATETIME(3) NOT NULL,
    ADD COLUMN `startHour` DATETIME(3) NOT NULL;
