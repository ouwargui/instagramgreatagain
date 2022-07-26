import {Request, Response} from 'express';
import UnlikePostUseCase from './UnlikePostUseCase';

class UnlikePostController {
  private unlikePostUseCase: UnlikePostUseCase;

  constructor(unlikePostUseCase: UnlikePostUseCase) {
    this.unlikePostUseCase = unlikePostUseCase;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const {account_id} = req;
    const {post_id, like_id} = req.params;

    const likeDeleted = await this.unlikePostUseCase.handle({
      account_id,
      post_id,
      like_id,
    });

    return res.status(200).json({likeDeleted});
  }
}

export default UnlikePostController;
