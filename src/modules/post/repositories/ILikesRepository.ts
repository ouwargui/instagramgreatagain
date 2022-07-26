import {User} from '../../user/models/User';
import {Like} from '../model/Like';
import {Post} from '../model/Post';

export interface ILikePostDTO {
  author_id: string;
  post_id: string;
}

export interface ILikesRepository {
  create({author_id, post_id}: ILikePostDTO): Promise<Like>;
  delete(id: string): Promise<Like>;
  getById(id: string): Promise<(Like & {author: User; post: Post}) | null>;
}
