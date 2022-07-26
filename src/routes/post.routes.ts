import {Router} from 'express';
import multer from 'multer';
import {UploadHandler} from '../middlewares/UploadHandler';
import {createPostController} from '../modules/post/useCases/createPost';

const upload = multer();
const routes = Router();

routes.post('/', upload.array('files', 4), UploadHandler, (req, res) =>
  createPostController.handle(req, res),
);

export default routes;
