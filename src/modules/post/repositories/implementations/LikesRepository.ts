import {PrismaClient} from '@prisma/client';
import PrismaRepository from '../../../../db/PrismaRepository';
import {User} from '../../../user/models/User';
import {Like} from '../../model/Like';
import {Post} from '../../model/Post';
import {ILikePostDTO, ILikesRepository} from '../ILikesRepository';

class LikesRepository implements ILikesRepository {
  private db: PrismaClient;

  constructor() {
    this.db = PrismaRepository.getInstance();
  }

  async create({author_id, post_id}: ILikePostDTO): Promise<Like> {
    return this.db.like.create({
      data: {
        author_id: Number(author_id),
        post_id: Number(post_id),
        created_at: new Date(),
      },
    });
  }

  async delete(id: string): Promise<Like> {
    return this.db.like.delete({
      where: {
        id: Number(id),
      },
    });
  }

  async getById(
    id: string,
  ): Promise<(Like & {author: User; post: Post}) | null> {
    return this.db.like.findUnique({
      where: {
        id: Number(id),
      },
      include: {
        author: true,
        post: true,
      },
    });
  }
}

export default LikesRepository;
