import {Like} from '../../model/Like';
import {ILikesRepository} from '../../repositories/ILikesRepository';

interface ILikePost {
  post_id: string;
  author_id: string;
}

class LikePostUseCase {
  private likesRepository: ILikesRepository;

  constructor(likesRepository: ILikesRepository) {
    this.likesRepository = likesRepository;
  }

  async execute({post_id, author_id}: ILikePost): Promise<Like> {
    if (!post_id || !author_id) {
      throw new Error('Missing required fields');
    }

    const like = await this.likesRepository.create({
      post_id,
      author_id,
    });

    return like;
  }
}

export default LikePostUseCase;
