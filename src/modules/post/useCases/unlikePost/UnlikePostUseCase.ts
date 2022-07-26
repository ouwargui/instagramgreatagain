import {Like} from '../../model/Like';
import {ILikesRepository} from '../../repositories/ILikesRepository';

interface IUnlikePost {
  account_id: string;
  post_id: string;
  like_id: string;
}

class UnlikePostUseCase {
  private likesRepository: ILikesRepository;

  constructor(likesRepository: ILikesRepository) {
    this.likesRepository = likesRepository;
  }

  async handle({account_id, post_id, like_id}: IUnlikePost): Promise<Like> {
    if (!account_id || !post_id || !like_id) {
      throw new Error('Missing required fields');
    }

    const likeFound = await this.likesRepository.getById(like_id);

    if (!likeFound) {
      throw new Error('Like not found');
    }

    if (likeFound.author.account_id !== Number(account_id)) {
      throw new Error('You are not the author of this like');
    }

    if (likeFound.post_id !== Number(post_id)) {
      throw new Error('This like is not associated with this post');
    }

    const likeDeleted = await this.likesRepository.delete(like_id);

    return likeDeleted;
  }
}

export default UnlikePostUseCase;
