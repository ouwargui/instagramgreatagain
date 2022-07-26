import {Router} from 'express';
import multer from 'multer';
import {UploadHandler} from '../middlewares/UploadHandler';
import {createPostController} from '../modules/post/useCases/createPost';
import {likePostController} from '../modules/post/useCases/likePost';
import {unlikePostController} from '../modules/post/useCases/unlikePost';

const upload = multer();
const routes = Router();

routes.post('/', upload.array('files', 4), UploadHandler, (req, res) =>
  createPostController.handle(req, res),
);
routes.post('/:post_id/like', (req, res) =>
  likePostController.handle(req, res),
);
routes.delete('/:post_id/like/:like_id', (req, res) =>
  unlikePostController.handle(req, res),
);

export default routes;
