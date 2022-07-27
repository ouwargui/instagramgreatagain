import {Comment} from '../../model/Comment';
import {ICommentsRepository} from '../../repositories/ICommentsRepository';

interface ICommentPost {
  author_id: string;
  post_id: string;
  content: string;
}

class CommentPostUseCase {
  private commentsRepository: ICommentsRepository;

  constructor(commentsRepository: ICommentsRepository) {
    this.commentsRepository = commentsRepository;
  }

  async execute({author_id, post_id, content}: ICommentPost): Promise<Comment> {
    if (!author_id || !post_id || !content) {
      throw new Error('Missing required fields');
    }

    const postCreated = await this.commentsRepository.create({
      author_id,
      content,
      post_id,
    });

    return postCreated;
  }
}

export default CommentPostUseCase;
