import {Router} from 'express';
import multer from 'multer';
import {UploadHandler} from '../middlewares/UploadHandler';
import {createUserController} from '../modules/user/usecases/createUser';
import {getAllFieldsByUserIdController} from '../modules/user/usecases/getAllFieldsByUserId';

const upload = multer();
const routes = Router();

routes.post('/', upload.array('files', 1), UploadHandler, (req, res) =>
  createUserController.handle(req, res),
);
routes.get('/:user_id', (req, res) =>
  getAllFieldsByUserIdController.handle(req, res),
);

export default routes;
