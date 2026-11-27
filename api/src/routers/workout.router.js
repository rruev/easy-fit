import { Router } from 'express';

import { isAuthenticated } from '../middlewares/auth.middleware.js';

import { workoutController } from '../controllers/index.js';

const workoutRouter = Router();

workoutRouter.post('/', isAuthenticated, workoutController.create);
workoutRouter.get('/', isAuthenticated, workoutController.getAll);
workoutRouter.get('/:id', isAuthenticated, workoutController.getById);
workoutRouter.put('/:id', isAuthenticated, workoutController.update);
workoutRouter.delete('/:id', isAuthenticated, workoutController.remove);

export default workoutRouter;