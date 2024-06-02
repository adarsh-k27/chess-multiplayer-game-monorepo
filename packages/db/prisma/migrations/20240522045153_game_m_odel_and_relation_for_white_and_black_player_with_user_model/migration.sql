-- CreateEnum
CREATE TYPE "TimeControl" AS ENUM ('CLASSICAL', 'RAPID', 'BLITZ', 'BULLET');

-- CreateEnum
CREATE TYPE "Game_Status" AS ENUM ('IN_PROGRESS', 'COMPLETED', 'ABANDONED', 'TIME_UP');

-- CreateEnum
CREATE TYPE "Results" AS ENUM ('WHITE_WIN', 'BLACK_WIN', 'DRAW');

-- CreateTable
CREATE TABLE "Game" (
    "id" TEXT NOT NULL,
    "whitePlayerId" INTEGER NOT NULL,
    "blackPlayerId" INTEGER,
    "status" "Game_Status" NOT NULL,
    "result" "Results" NOT NULL,
    "startAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "endAt" TIMESTAMP(3),
    "timeControl" "TimeControl" NOT NULL,
    "startingFen" TEXT NOT NULL DEFAULT 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
    "currebtFen" TEXT,

    CONSTRAINT "Game_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_whitePlayerId_fkey" FOREIGN KEY ("whitePlayerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Game" ADD CONSTRAINT "Game_blackPlayerId_fkey" FOREIGN KEY ("blackPlayerId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
