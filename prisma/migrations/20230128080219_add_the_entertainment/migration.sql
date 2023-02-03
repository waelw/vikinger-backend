-- CreateTable
CREATE TABLE "Entertainment" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "type" TEXT NOT NULL,

    CONSTRAINT "Entertainment_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EntertainmentOnUsers" (
    "entertainmentId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "assignedBy" TEXT NOT NULL,

    CONSTRAINT "EntertainmentOnUsers_pkey" PRIMARY KEY ("userId","entertainmentId")
);

-- AddForeignKey
ALTER TABLE "EntertainmentOnUsers" ADD CONSTRAINT "EntertainmentOnUsers_entertainmentId_fkey" FOREIGN KEY ("entertainmentId") REFERENCES "Entertainment"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "EntertainmentOnUsers" ADD CONSTRAINT "EntertainmentOnUsers_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
