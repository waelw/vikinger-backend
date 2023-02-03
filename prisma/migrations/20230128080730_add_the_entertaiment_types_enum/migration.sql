/*
  Warnings:

  - Changed the type of `type` on the `Entertainment` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "EentertainmentTypes" AS ENUM ('TV_SHOWS', 'MUSIC_ARTISTS', 'MOVIES', 'BOOKS', 'GAMES', 'HOBBIES');

-- AlterTable
ALTER TABLE "Entertainment" DROP COLUMN "type",
ADD COLUMN     "type" "EentertainmentTypes" NOT NULL;
