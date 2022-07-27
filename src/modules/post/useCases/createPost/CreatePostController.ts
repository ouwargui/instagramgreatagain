import {Request, Response} from 'express';
import {File} from '../../../../infra/fileUploader/IFileUploader';
import CreatePostUseCase from './CreatePostUseCase';

class CreatePostController {
  private createPostUseCase: CreatePostUseCase;

  constructor(createPostUseCase: CreatePostUseCase) {
    this.createPostUseCase = createPostUseCase;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const {author_id, description} = req.body;
    const {files} = req.body as {files: File[]};

    const post = await this.createPostUseCase.execute({
      author_id,
      files,
      description,
    });

    return res.status(200).json(post);
  }
}

export default CreatePostController;
