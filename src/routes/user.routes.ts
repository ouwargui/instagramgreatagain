import {Router} from 'express';
import {createUserController} from '../modules/user/usecases/createUser';

const routes = Router();

routes.post('/', (req, res) => createUserController.handle(req, res));

export default routes;
