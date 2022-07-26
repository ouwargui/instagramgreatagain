import {Request, Response} from 'express';
import LikePostUseCase from './LikePostUseCase';

class LikePostController {
  private likePostUseCase: LikePostUseCase;

  constructor(likePostUseCase: LikePostUseCase) {
    this.likePostUseCase = likePostUseCase;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const {post_id} = req.params;
    const {author_id} = req.body;

    const postLiked = await this.likePostUseCase.execute({
      post_id,
      author_id,
    });

    return res.status(201).json(postLiked);
  }
}

export default LikePostController;
