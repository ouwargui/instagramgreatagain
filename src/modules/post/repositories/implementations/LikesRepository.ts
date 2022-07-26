import {PrismaClient} from '@prisma/client';
import PrismaRepository from '../../../../db/PrismaRepository';
import {Like} from '../../model/Like';
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
}

export default LikesRepository;
