import { Router } from "express";

import authRouter from "./routers/auth.router.js";
import userRouter from "./routers/user.router.js";
import excerciseRouter from "./routers/excercise.router.js";
import exerciseCategoryRouter from "./routers/exerciseCategory.router.js";
import workoutCategoryRouter from "./routers/workoutCategory.router.js";
import workoutRouter from "./routers/workout.router.js";

const router = Router();

router.use("/auth", authRouter);
router.use("/users", userRouter);
router.use("/exercises", excerciseRouter);
router.use("/exercise-categories", exerciseCategoryRouter);
router.use("/workout-categories", workoutCategoryRouter);
router.use("/workouts", workoutRouter);

export default router;