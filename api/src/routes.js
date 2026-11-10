import { Router } from "express";

import authRouter from "./routers/auth.router.js";
import userRouter from "./routers/user.router.js";

const router = Router();

router.use("/auth", authRouter);
router.use("/users", userRouter);

export default router;