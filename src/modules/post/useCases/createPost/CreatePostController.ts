import {Request, Response} from 'express';
import CreatePostUseCase from './CreatePostUseCase';

class CreatePostController {
  private createPostUseCase: CreatePostUseCase;

  constructor(createPostUseCase: CreatePostUseCase) {
    this.createPostUseCase = createPostUseCase;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const {author_id, pics, description} = req.body;

    const post = await this.createPostUseCase.execute({
      author_id,
      pics,
      description,
    });

    return res.status(200).json(post);
  }
}

export default CreatePostController;
