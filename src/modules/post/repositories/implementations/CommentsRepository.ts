import {PrismaClient} from '@prisma/client';
import PrismaRepository from '../../../../db/PrismaRepository';
import {Comment} from '../../model/Comment';
import {ICommentPostDTO, ICommentsRepository} from '../ICommentsRepository';

class CommentsRepository implements ICommentsRepository {
  private db: PrismaClient;

  constructor() {
    this.db = PrismaRepository.getInstance();
  }

  create({author_id, content, post_id}: ICommentPostDTO): Promise<Comment> {
    return this.db.comment.create({
      data: {
        content,
        post_id: Number(post_id),
        author_id: Number(author_id),
        created_at: new Date(),
      },
    });
  }
}

export default CommentsRepository;
