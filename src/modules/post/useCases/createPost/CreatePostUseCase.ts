import {Post} from '../../model/Post';
import {IPostsRepository} from '../../repositories/IPostsRepository';

interface ICreatePost {
  author_id: number;
  pics: string[];
  description: string;
}

class CreatePostUseCase {
  private postsRepository: IPostsRepository;

  constructor(postsRepository: IPostsRepository) {
    this.postsRepository = postsRepository;
  }

  async execute({author_id, pics, description}: ICreatePost): Promise<Post> {
    if (!author_id || !pics || pics.length < 1 || !description) {
      throw new Error('Missing required fields');
    }

    return this.postsRepository.create({author_id, pics, description});
  }
}

export default CreatePostUseCase;
