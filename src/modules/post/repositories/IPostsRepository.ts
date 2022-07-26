import {Post} from '../model/Post';

export interface ICreatePostDTO {
  author_id: number;
  pics: string[];
  description: string;
}

export interface IPostsRepository {
  create({author_id, pics, description}: ICreatePostDTO): Promise<Post>;
}
