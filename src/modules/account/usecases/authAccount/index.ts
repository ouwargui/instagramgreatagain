import JWTAdapter from '../../../../infra/authentication/implementations/JWTAdapter';
import {BcryptAdapter} from '../../../../infra/criptography/implementations/BcryptAdapter';
import AccountRepository from '../../repositories/implementations/AccountRepository';
import AuthAccountController from './AuthAccountController';
import AuthAccountUseCase from './AuthAccountUseCase';

const accountRepository = new AccountRepository();
const encrypter = new BcryptAdapter();
const authenticator = new JWTAdapter();
const authAccountUseCase = new AuthAccountUseCase(
  accountRepository,
  encrypter,
  authenticator,
);
const authAccountController = new AuthAccountController(authAccountUseCase);
export {authAccountController};
