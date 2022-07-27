import PostsRepository from '../../repositories/implementations/PostsRepository';
import GetAllPostsWithFieldsController from './GetAllPostsWithFieldsController';
import GetAllPostsWithFieldsUseCase from './GetAllPostsWithFieldsUseCases';

const postsRepository = new PostsRepository();
const getAllPostsWithFieldsUseCase = new GetAllPostsWithFieldsUseCase(
  postsRepository,
);
const getAllPostsWithFieldsController = new GetAllPostsWithFieldsController(
  getAllPostsWithFieldsUseCase,
);

export {getAllPostsWithFieldsController};
