import { Request, Response, Router } from 'express';
import UserController from '../app/controllers/entities/UserController';

const userRouter = Router();

userRouter.get('/', UserController.listAll);
userRouter.get('/:id', UserController.getById);
userRouter.post('/', UserController.addNew);

export { userRouter };