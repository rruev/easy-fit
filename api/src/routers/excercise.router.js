import { Router } from "express";

import { isAuthenticated } from "../middlewares/auth.middleware.js";

import { exerciseController } from "../controllers/index.js";

const excerciseRouter = Router();

excerciseRouter.get("/", isAuthenticated, exerciseController.getAll);
excerciseRouter.post("/", isAuthenticated, exerciseController.create);
excerciseRouter.get("/:id", isAuthenticated, exerciseController.getById);
excerciseRouter.put("/:id", isAuthenticated, exerciseController.update);
excerciseRouter.delete("/:id", isAuthenticated, exerciseController.remove);

export default excerciseRouter;