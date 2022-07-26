import LikesRepository from '../../repositories/implementations/LikesRepository';
import UnlikePostController from './UnlikePostController';
import UnlikePostUseCase from './UnlikePostUseCase';

const likesRepository = new LikesRepository();
const unlikePostUseCase = new UnlikePostUseCase(likesRepository);
const unlikePostController = new UnlikePostController(unlikePostUseCase);

export {unlikePostController};
