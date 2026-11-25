/*
  Warnings:

  - You are about to drop the column `reps` on the `workout_exercises` table. All the data in the column will be lost.
  - Added the required column `position` to the `workout_exercises` table without a default value. This is not possible if the table is not empty.
  - Added the required column `target` to the `workout_exercises` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TargetType" AS ENUM ('reps', 'time');

-- DropForeignKey
ALTER TABLE "exercises" DROP CONSTRAINT "exercises_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "exercises" DROP CONSTRAINT "exercises_userId_fkey";

-- DropForeignKey
ALTER TABLE "schedules" DROP CONSTRAINT "schedules_userId_fkey";

-- DropForeignKey
ALTER TABLE "workouts" DROP CONSTRAINT "workouts_categoryId_fkey";

-- DropForeignKey
ALTER TABLE "workouts" DROP CONSTRAINT "workouts_userId_fkey";

-- AlterTable
ALTER TABLE "workout_exercises" DROP COLUMN "reps",
ADD COLUMN     "position" INTEGER NOT NULL,
ADD COLUMN     "restSeconds" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "target" INTEGER NOT NULL,
ADD COLUMN     "targetType" "TargetType" NOT NULL DEFAULT 'reps';

-- AddForeignKey
ALTER TABLE "workouts" ADD CONSTRAINT "workouts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workouts" ADD CONSTRAINT "workouts_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "workout_categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exercises" ADD CONSTRAINT "exercises_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exercises" ADD CONSTRAINT "exercises_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "exercise_categories"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "schedules" ADD CONSTRAINT "schedules_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
