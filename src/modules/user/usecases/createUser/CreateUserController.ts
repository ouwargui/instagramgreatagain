import {Request, Response} from 'express';
import {File} from '../../../../infra/fileUploader/IFileUploader';
import CreateUserUseCase from './CreateUserUseCase';

class CreateUserController {
  private createUserUseCase: CreateUserUseCase;

  constructor(createUserUseCase: CreateUserUseCase) {
    this.createUserUseCase = createUserUseCase;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const {username, bio} = req.body;
    const {account_id} = req;
    const {files} = req.body as {files: File};

    const userCreated = await this.createUserUseCase.execute({
      username,
      bio,
      profile_pic_file: files,
      account_id: Number(account_id),
    });

    return res.status(201).json({userCreated});
  }
}

export default CreateUserController;
