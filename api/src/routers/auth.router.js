import { Router } from "express";

import { isAuthenticated, isGuest } from "../middlewares/auth.middleware.js";
import { authController } from "../controllers/index.js";

const authRouter = Router();

authRouter.post("/login", isGuest, authController.login);
authRouter.post("/register", isGuest, authController.register);
authRouter.post("/logout", isAuthenticated, authController.logout);
authRouter.get("/me", isAuthenticated, authController.getUser);

export default authRouter;