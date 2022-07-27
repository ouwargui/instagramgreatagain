import {User} from '../../../user/models/User';
import {Comment} from '../../model/Comment';
import {Like} from '../../model/Like';
import {Post} from '../../model/Post';
import PostsRepository from '../../repositories/implementations/PostsRepository';

class GetAllPostsWithFieldsUseCase {
  private postsRepository: PostsRepository;

  constructor(postsRepository: PostsRepository) {
    this.postsRepository = postsRepository;
  }

  async execute(): Promise<
    (Post & {
      author: User;
      likes: Like[];
      comments: Comment[];
    })[]
  > {
    const postsFound = await this.postsRepository.getAllPostsWithFields();

    return postsFound;
  }
}

export default GetAllPostsWithFieldsUseCase;
