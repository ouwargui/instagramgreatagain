import {Request, Response} from 'express';
import AuthAccountUseCase from './AuthAccountUseCase';

class AuthAccountController {
  private authAccountUseCase: AuthAccountUseCase;

  constructor(authAccountUseCase: AuthAccountUseCase) {
    this.authAccountUseCase = authAccountUseCase;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const {email, password} = req.body;

    const {token, account_found} = await this.authAccountUseCase.execute({
      email,
      password,
    });

    return res.status(200).json({token, user: account_found});
  }
}

export default AuthAccountController;
