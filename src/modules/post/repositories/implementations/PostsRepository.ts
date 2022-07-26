import {PrismaClient} from '@prisma/client';
import PrismaRepository from '../../../../db/PrismaRepository';
import {Post} from '../../model/Post';
import {ICreatePostDTO, IPostsRepository} from '../IPostsRepository';

class PostsRepository implements IPostsRepository {
  private db: PrismaClient;

  constructor() {
    this.db = PrismaRepository.getInstance();
  }

  async create({author_id, description, pics}: ICreatePostDTO): Promise<Post> {
    return this.db.post.create({
      data: {
        author_id,
        description,
        pics,
        created_at: new Date(),
      },
    });
  }
}

export default PostsRepository;
