import { Router } from 'express';
import { userRouter } from './userRouter';

const routes = Router();
//User
routes.use('/users', userRouter);

export { routes };