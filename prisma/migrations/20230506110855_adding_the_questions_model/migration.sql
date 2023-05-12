-- AlterTable
ALTER TABLE "User" ADD COLUMN     "recoveryEmail" TEXT,
ADD COLUMN     "recoveryPhone" TEXT;

-- CreateTable
CREATE TABLE "Questions" (
    "id" SERIAL NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "Questions_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Answers" (
    "id" SERIAL NOT NULL,
    "answer" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "questionId" INTEGER NOT NULL,

    CONSTRAINT "Answers_pkey" PRIMARY KEY ("id")
);
