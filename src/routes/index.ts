import {Router} from 'express';
import {AuthHandler} from '../middlewares/AuthHandler';
import accountRoutes from './account.routes';
import userRoutes from './user.routes';

const routes = Router();

routes.use('/account', accountRoutes);
routes.use('/user', AuthHandler, userRoutes);

export {routes};
