import {Request, Response} from 'express';
import {Controller} from '../../../../interfaces/Controller';
import CreateAccountUseCase from './CreateAccountUseCase';

class CreateAccountController implements Controller {
  private createAccountUseCase: CreateAccountUseCase;

  constructor(createAccountUseCase: CreateAccountUseCase) {
    this.createAccountUseCase = createAccountUseCase;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const {email, password} = req.body;

    const accountCreated = await this.createAccountUseCase.execute({
      email,
      password,
    });

    return res.status(201).json({account: accountCreated});
  }
}

export default CreateAccountController;