import { Router } from "express";

import { isAuthenticated } from "../middlewares/auth.middleware.js";
import { exerciseCategoryController } from "../controllers/index.js";

const exerciseCategoryRouter = Router();

exerciseCategoryRouter.get("/", isAuthenticated, exerciseCategoryController.getAll);
exerciseCategoryRouter.post("/", isAuthenticated, exerciseCategoryController.create);
exerciseCategoryRouter.get("/:id", isAuthenticated, exerciseCategoryController.getById);
exerciseCategoryRouter.put("/:id", isAuthenticated, exerciseCategoryController.update);
exerciseCategoryRouter.delete("/:id", isAuthenticated, exerciseCategoryController.remove);

export default exerciseCategoryRouter;
