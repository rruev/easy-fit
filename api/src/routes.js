import { Router } from "express";

import authRouter from "./routers/auth.router.js";
import userRouter from "./routers/user.router.js";
import excerciseRouter from "./routers/excercise.router.js";

const router = Router();

router.use("/auth", authRouter);
router.use("/users", userRouter);
router.use("/exercises", excerciseRouter);

export default router;