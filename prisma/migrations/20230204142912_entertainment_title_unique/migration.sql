/*
  Warnings:

  - A unique constraint covering the columns `[title]` on the table `Entertainment` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Entertainment_title_key" ON "Entertainment"("title");
