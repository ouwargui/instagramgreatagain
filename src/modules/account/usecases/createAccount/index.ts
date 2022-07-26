import JWTAdapter from '../../../../infra/authentication/implementations/JWTAdapter';
import {BcryptAdapter} from '../../../../infra/criptography/implementations/BcryptAdapter';
import AccountRepository from '../../repositories/implementations/AccountRepository';
import AuthAccountUseCase from '../authAccount/AuthAccountUseCase';
import CreateAccountController from './CreateAccountController';
import CreateAccountUseCase from './CreateAccountUseCase';

const encrypter = new BcryptAdapter();
const authenticator = new JWTAdapter();
const accountRepository = new AccountRepository();
const authAccountUseCase = new AuthAccountUseCase(
  accountRepository,
  encrypter,
  authenticator,
);
const createAccountUseCase = new CreateAccountUseCase(
  encrypter,
  accountRepository,
  authAccountUseCase,
);
const createAccountController = new CreateAccountController(
  createAccountUseCase,
);

export {createAccountController};
