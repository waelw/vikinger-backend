/*
  Warnings:

  - You are about to drop the `EntertainmentOnUsers` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "EntertainmentOnUsers" DROP CONSTRAINT "EntertainmentOnUsers_entertainmentId_fkey";

-- DropForeignKey
ALTER TABLE "EntertainmentOnUsers" DROP CONSTRAINT "EntertainmentOnUsers_userId_fkey";

-- DropTable
DROP TABLE "EntertainmentOnUsers";

-- CreateTable
CREATE TABLE "_EntertainmentToUser" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_EntertainmentToUser_AB_unique" ON "_EntertainmentToUser"("A", "B");

-- CreateIndex
CREATE INDEX "_EntertainmentToUser_B_index" ON "_EntertainmentToUser"("B");

-- AddForeignKey
ALTER TABLE "_EntertainmentToUser" ADD CONSTRAINT "_EntertainmentToUser_A_fkey" FOREIGN KEY ("A") REFERENCES "Entertainment"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EntertainmentToUser" ADD CONSTRAINT "_EntertainmentToUser_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
