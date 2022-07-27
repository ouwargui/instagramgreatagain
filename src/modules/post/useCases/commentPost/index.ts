import CommentsRepository from '../../repositories/implementations/CommentsRepository';
import CommentPostController from './CommentPostController';
import CommentPostUseCase from './CommentPostUseCase';

const commentsRepository = new CommentsRepository();
const commentPostUseCase = new CommentPostUseCase(commentsRepository);
const commentPostController = new CommentPostController(commentPostUseCase);

export {commentPostController};
