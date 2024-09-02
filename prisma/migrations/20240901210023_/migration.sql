/*
  Warnings:

  - You are about to drop the column `image` on the `User` table. All the data in the column will be lost.
  - Added the required column `subject` to the `Note` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Note" ADD COLUMN     "subject" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "image";
