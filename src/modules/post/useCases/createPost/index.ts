import AWSFileUploader from '../../../../infra/fileUploader/implementations/awsFileUploader';
import PostsRepository from '../../repositories/implementations/PostsRepository';
import CreatePostController from './CreatePostController';
import CreatePostUseCase from './CreatePostUseCase';

const fileUploader = new AWSFileUploader();
const postsRepository = new PostsRepository();
const createPostUseCase = new CreatePostUseCase(postsRepository);
const createPostController = new CreatePostController(
  createPostUseCase,
  fileUploader,
);

export {createPostController};
