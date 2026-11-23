/*
  Warnings:

  - You are about to drop the column `category` on the `exercises` table. All the data in the column will be lost.
  - The primary key for the `schedule_workouts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `category` on the `workouts` table. All the data in the column will be lost.
  - Added the required column `categoryId` to the `exercises` table without a default value. This is not possible if the table is not empty.
  - The required column `scheduleWorkoutId` was added to the `schedule_workouts` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `categoryId` to the `workouts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "exercises" DROP COLUMN "category",
ADD COLUMN     "categoryId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "schedule_workouts" DROP CONSTRAINT "schedule_workouts_pkey",
ADD COLUMN     "scheduleWorkoutId" TEXT NOT NULL,
ADD CONSTRAINT "schedule_workouts_pkey" PRIMARY KEY ("scheduleWorkoutId");

-- AlterTable
ALTER TABLE "workouts" DROP COLUMN "category",
ADD COLUMN     "categoryId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "exercise_categories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,

    CONSTRAINT "exercise_categories_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "workout_categories" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,

    CONSTRAINT "workout_categories_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "exercise_categories_name_key" ON "exercise_categories"("name");

-- CreateIndex
CREATE UNIQUE INDEX "workout_categories_name_key" ON "workout_categories"("name");

-- AddForeignKey
ALTER TABLE "workouts" ADD CONSTRAINT "workouts_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "workout_categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exercises" ADD CONSTRAINT "exercises_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "exercise_categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
