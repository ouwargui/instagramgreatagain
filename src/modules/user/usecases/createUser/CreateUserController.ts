import {Request, Response} from 'express';
import CreateUserUseCase from './CreateUserUseCase';

class CreateUserController {
  private createUserUseCase: CreateUserUseCase;

  constructor(createUserUseCase: CreateUserUseCase) {
    this.createUserUseCase = createUserUseCase;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const {username, bio, profile_pic} = req.body;
    const {account_id} = req;

    const userCreated = await this.createUserUseCase.execute({
      username,
      bio,
      profile_pic,
      account_id: Number(account_id),
    });

    return res.status(201).json({userCreated});
  }
}

export default CreateUserController;
