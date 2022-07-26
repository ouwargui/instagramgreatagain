import {Router} from 'express';
import {createPostController} from '../modules/post/useCases/createPost';

const routes = Router();

routes.post('/', (req, res) => createPostController.handle(req, res));

export default routes;
