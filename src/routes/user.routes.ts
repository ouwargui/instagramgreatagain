import {Router} from 'express';
import {createUserController} from '../modules/user/usecases/createUser';
import {getAllFieldsByUserIdController} from '../modules/user/usecases/getAllFieldsByUserId';

const routes = Router();

routes.post('/', (req, res) => createUserController.handle(req, res));
routes.get('/:user_id', (req, res) =>
  getAllFieldsByUserIdController.handle(req, res),
);

export default routes;
