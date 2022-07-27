import {Request, Response} from 'express';
import CommentPostUseCase from './CommentPostUseCase';

class CommentPostController {
  private commentPostUseCase: CommentPostUseCase;

  constructor(commentPostUseCase: CommentPostUseCase) {
    this.commentPostUseCase = commentPostUseCase;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const {author_id, content} = req.body;
    const {post_id} = req.params;

    const postCommented = await this.commentPostUseCase.execute({
      author_id,
      post_id,
      content,
    });

    return res.status(201).json(postCommented);
  }
}

export default CommentPostController;
