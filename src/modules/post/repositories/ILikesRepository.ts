import {Like} from '../model/Like';

export interface ILikePostDTO {
  author_id: string;
  post_id: string;
}

export interface ILikesRepository {
  create({author_id, post_id}: ILikePostDTO): Promise<Like>;
}
