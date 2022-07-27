import {Comment} from '../model/Comment';

export interface ICommentPostDTO {
  author_id: string;
  post_id: string;
  content: string;
}

export interface ICommentsRepository {
  create({author_id, content, post_id}: ICommentPostDTO): Promise<Comment>;
}
