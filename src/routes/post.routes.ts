import {Router} from 'express';
import multer from 'multer';
import {UploadHandler} from '../middlewares/UploadHandler';
import {createPostController} from '../modules/post/useCases/createPost';
import {likePostController} from '../modules/post/useCases/likePost';

const upload = multer();
const routes = Router();

routes.post('/', upload.array('files', 4), UploadHandler, (req, res) =>
  createPostController.handle(req, res),
);
routes.post('/:id/like', (req, res) => likePostController.handle(req, res));

export default routes;
