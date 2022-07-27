import {Request, Response} from 'express';
import GetAllPostsWithFieldsUseCase from './GetAllPostsWithFieldsUseCases';

class GetAllPostsWithFieldsController {
  private getAllPostsWithFieldsUseCase: GetAllPostsWithFieldsUseCase;

  constructor(getAllPostsWithFieldsUseCase: GetAllPostsWithFieldsUseCase) {
    this.getAllPostsWithFieldsUseCase = getAllPostsWithFieldsUseCase;
  }

  async handle(req: Request, res: Response): Promise<Response> {
    const postsFound = await this.getAllPostsWithFieldsUseCase.execute();

    return res.status(200).json({postsFound});
  }
}

export default GetAllPostsWithFieldsController;
