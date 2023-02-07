-- CreateEnum
CREATE TYPE "Status" AS ENUM ('SINGLE', 'TAKEN');

-- CreateEnum
CREATE TYPE "EentertainmentTypes" AS ENUM ('TV_SHOWS', 'MUSIC_ARTISTS', 'MOVIES', 'BOOKS', 'GAMES', 'HOBBIES');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "birthday" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT,
    "occupation" TEXT,
    "profileName" TEXT,
    "publicEmail" TEXT,
    "publicWebsite" TEXT,
    "tagline" TEXT,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "countryId" INTEGER,
    "cityId" INTEGER,
    "birthplace" TEXT,
    "status" "Status",

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Country" (
    "id" SERIAL NOT NULL,
    "shortname" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phonecode" INTEGER NOT NULL,

    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "City" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "countryId" INTEGER NOT NULL,

    CONSTRAINT "City_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Entertainment" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "type" "EentertainmentTypes" NOT NULL,

    CONSTRAINT "Entertainment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Job" (
    "id" SERIAL NOT NULL,
    "titleOrPlace" TEXT NOT NULL,
    "year" INTEGER NOT NULL,
    "endYear" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_EntertainmentToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE INDEX "User_countryId_idx" ON "User"("countryId");

-- CreateIndex
CREATE INDEX "User_cityId_idx" ON "User"("cityId");

-- CreateIndex
CREATE INDEX "City_countryId_idx" ON "City"("countryId");

-- CreateIndex
CREATE UNIQUE INDEX "Entertainment_title_key" ON "Entertainment"("title");

-- CreateIndex
CREATE INDEX "Job_userId_idx" ON "Job"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "_EntertainmentToUser_AB_unique" ON "_EntertainmentToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_EntertainmentToUser_B_index" ON "_EntertainmentToUser"("B");
