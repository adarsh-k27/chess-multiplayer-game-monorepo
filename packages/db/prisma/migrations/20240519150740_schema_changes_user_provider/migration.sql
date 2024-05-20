-- CreateEnum
CREATE TYPE "AuthPRovider" AS ENUM ('EMAIL', 'FACEBOOK', 'google', 'GITHUB');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT,
    "provider" "AuthPRovider" NOT NULL,
    "password" TEXT,
    "name" TEXT NOT NULL,
    "rating" INTEGER DEFAULT 1200,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "lastLogin" TIMESTAMP(3),

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE INDEX "User_rating_idx" ON "User"("rating");
