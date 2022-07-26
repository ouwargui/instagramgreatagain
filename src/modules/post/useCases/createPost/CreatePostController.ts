import {Request, Response} from 'express';
import {
  File,
  IFileUploader,
} from '../../../../infra/fileUploader/IFileUploader';
import CreatePostUseCase from './CreatePostUseCase';

class CreatePostController {
  private createPostUseCase: CreatePostUseCase;
  private fileUploader: IFileUploader;

  constructor(
    createPostUseCase: CreatePostUseCase,
    fileUploader: IFileUploader,
  ) {
    this.createPostUseCase = createPostUseCase;
    this.fileUploader = fileUploader;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const {author_id, description} = req.body;
    const {files} = req.body as {files: File[]};

    const files_path = await this.fileUploader.upload(files);

    const post = await this.createPostUseCase.execute({
      author_id,
      pics: files_path ?? [],
      description,
    });

    return res.status(200).json(post);
  }
}

export default CreatePostController;
