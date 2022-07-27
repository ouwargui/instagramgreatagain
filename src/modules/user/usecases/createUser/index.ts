import AWSFileUploader from '../../../../infra/fileUploader/implementations/awsFileUploader';
import UsersRepository from '../../repositories/implementations/UsersRepository';
import CreateUserController from './CreateUserController';
import CreateUserUseCase from './CreateUserUseCase';

const fileUploader = new AWSFileUploader();
const userRepository = new UsersRepository();
const createUserUseCase = new CreateUserUseCase(userRepository, fileUploader);
const createUserController = new CreateUserController(createUserUseCase);

export {createUserController};
