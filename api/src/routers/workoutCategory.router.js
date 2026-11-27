import { Router } from "express";

import { isAuthenticated } from "../middlewares/auth.middleware.js";
import { workoutCategoryController } from "../controllers/index.js";

const workoutCategoryRouter = Router();

workoutCategoryRouter.get("/", isAuthenticated, workoutCategoryController.getAll);
workoutCategoryRouter.post("/", isAuthenticated, workoutCategoryController.create);
workoutCategoryRouter.get("/:id", isAuthenticated, workoutCategoryController.getById);
workoutCategoryRouter.put("/:id", isAuthenticated, workoutCategoryController.update);
workoutCategoryRouter.delete("/:id", isAuthenticated, workoutCategoryController.remove);

export default workoutCategoryRouter;
