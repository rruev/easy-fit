/*
  Warnings:

  - You are about to drop the `_ExerciseToWorkout` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ExerciseToWorkout" DROP CONSTRAINT "_ExerciseToWorkout_A_fkey";

-- DropForeignKey
ALTER TABLE "_ExerciseToWorkout" DROP CONSTRAINT "_ExerciseToWorkout_B_fkey";

-- DropTable
DROP TABLE "_ExerciseToWorkout";

-- CreateTable
CREATE TABLE "workout_exercises" (
    "workoutId" TEXT NOT NULL,
    "exerciseId" TEXT NOT NULL,
    "sets" INTEGER NOT NULL,
    "reps" INTEGER NOT NULL,

    CONSTRAINT "workout_exercises_pkey" PRIMARY KEY ("workoutId","exerciseId")
);

-- AddForeignKey
ALTER TABLE "workout_exercises" ADD CONSTRAINT "workout_exercises_workoutId_fkey" FOREIGN KEY ("workoutId") REFERENCES "workouts"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "workout_exercises" ADD CONSTRAINT "workout_exercises_exerciseId_fkey" FOREIGN KEY ("exerciseId") REFERENCES "exercises"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
