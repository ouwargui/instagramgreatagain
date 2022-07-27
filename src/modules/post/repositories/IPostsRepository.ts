import {User} from '../../user/models/User';
import {Comment} from '../model/Comment';
import {Like} from '../model/Like';
import {Post} from '../model/Post';

export interface ICreatePostDTO {
  author_id: number;
  pics: string[];
  description: string;
}

export interface IPostsRepository {
  create({author_id, pics, description}: ICreatePostDTO): Promise<Post>;
  getAllPostsWithFields(): Promise<
    (Post & {
      author: User;
      likes: Like[];
      comments: Comment[];
    })[]
  >;
}
