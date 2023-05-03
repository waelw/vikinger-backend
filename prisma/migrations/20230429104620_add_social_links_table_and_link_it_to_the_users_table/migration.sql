-- CreateEnum
CREATE TYPE "Platform" AS ENUM ('FACEBOOK', 'TWITTER', 'LINKEDIN', 'INSTAGRAM', 'TWITCH', 'GOOGLEPLUS', 'YOUTUBE', 'PATREON', 'DISCORD', 'DEVIANTART', 'BEHANCE', 'DRIBBBLE', 'ARTSTATION', 'PINTEREST');

-- CreateTable
CREATE TABLE "SocialLinks" (
    "id" SERIAL NOT NULL,
    "link" TEXT NOT NULL,
    "platform" "Platform" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "SocialLinks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "SocialLinks_userId_idx" ON "SocialLinks"("userId");
