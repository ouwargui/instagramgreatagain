import {Request, Response} from 'express';
import GetAllFieldsByUserIdUseCase from './GetAllFieldsByUserIdUseCase';

class GetAllFieldsByUserIdController {
  private getAllFieldsByUserIdUseCase: GetAllFieldsByUserIdUseCase;

  constructor(getAllFieldsByUserIdUseCase: GetAllFieldsByUserIdUseCase) {
    this.getAllFieldsByUserIdUseCase = getAllFieldsByUserIdUseCase;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const {user_id} = req.params;

    const userFound = await this.getAllFieldsByUserIdUseCase.execute(user_id);

    return res.status(200).json(userFound);
  }
}

export default GetAllFieldsByUserIdController;
