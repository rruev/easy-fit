import { Router } from "express";

import { isAuthenticated } from "../middlewares/auth.middleware.js";
import { userController } from "../controllers/index.js";

const userRouter = Router();

userRouter.get("/", isAuthenticated, userController.getAll);
userRouter.get("/:id", isAuthenticated, userController.getById);
userRouter.put("/:id", isAuthenticated, userController.update);
userRouter.delete("/:id", isAuthenticated, userController.remove);

export default userRouter;