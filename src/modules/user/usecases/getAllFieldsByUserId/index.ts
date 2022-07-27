import UsersRepository from '../../repositories/implementations/UsersRepository';
import GetAllFieldsByUserIdController from './GetAllFieldsByUserIdController';
import GetAllFieldsByUserIdUseCase from './GetAllFieldsByUserIdUseCase';

const usersRepository = new UsersRepository();
const getAllFieldsByUserIdUseCase = new GetAllFieldsByUserIdUseCase(
  usersRepository,
);
const getAllFieldsByUserIdController = new GetAllFieldsByUserIdController(
  getAllFieldsByUserIdUseCase,
);

export {getAllFieldsByUserIdController};
