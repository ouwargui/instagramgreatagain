import {Request, Response} from 'express';
import CreateAccountUseCase from './CreateAccountUseCase';

class CreateAccountController {
  private createAccountUseCase: CreateAccountUseCase;

  constructor(createAccountUseCase: CreateAccountUseCase) {
    this.createAccountUseCase = createAccountUseCase;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const {email, password} = req.body;

    const {accountCreated, token} = await this.createAccountUseCase.execute({
      email,
      password,
    });

    return res.status(201).json({account: accountCreated, token});
  }
}

export default CreateAccountController;
