import LikesRepository from '../../repositories/implementations/LikesRepository';
import LikePostController from './LikePostController';
import LikePostUseCase from './LikePostUseCase';

const likesRepository = new LikesRepository();
const likePostUseCase = new LikePostUseCase(likesRepository);
const likePostController = new LikePostController(likePostUseCase);

export {likePostController};
