import {Router} from 'express';
import {AuthHandler} from '../middlewares/AuthHandler';
import accountRoutes from './account.routes';
import userRoutes from './user.routes';
import postRoutes from './post.routes';

const routes = Router();

routes.use('/account', accountRoutes);
routes.use('/user', AuthHandler, userRoutes);
routes.use('/post', AuthHandler, postRoutes);

export {routes};
