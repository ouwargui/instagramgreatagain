import {PrismaClient} from '@prisma/client';
import PrismaRepository from '../../../../db/PrismaRepository';
import {User} from '../../../user/models/User';
import {Comment} from '../../model/Comment';
import {Like} from '../../model/Like';
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
        author_id: Number(author_id),
        description,
        pics,
        created_at: new Date(),
      },
    });
  }

  async getAllPostsWithFields(): Promise<
    (Post & {
      author: User;
      likes: Like[];
      comments: Comment[];
    })[]
  > {
    return this.db.post.findMany({
      include: {
        author: true,
        comments: true,
        likes: true,
      },
    });
  }
}

export default PostsRepository;
