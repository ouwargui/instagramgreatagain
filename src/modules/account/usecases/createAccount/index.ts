import {BcryptAdapter} from '../../../../infra/criptography/implementations/BcryptAdapter';
import AccountRepository from '../../repositories/implementations/AccountRepository';
import CreateAccountController from './CreateAccountController';
import CreateAccountUseCase from './CreateAccountUseCase';

const encrypter = new BcryptAdapter();
const accountRepository = new AccountRepository(encrypter);
const createAccountUseCase = new CreateAccountUseCase(accountRepository);
const createAccountController = new CreateAccountController(
  createAccountUseCase,
);

export {createAccountController};
