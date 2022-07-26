import {IEncrypter} from '../../../../infra/criptography/IEncrypter';
import {Account} from '../../models/Account';
import {IAccountRepository} from '../../repositories/IAccountRepository';
import AuthAccountUseCase from '../authAccount/AuthAccountUseCase';

interface ICreateAccountRequest {
  email: string;
  password: string;
}

class CreateAccountUseCase {
  private accountRepository: IAccountRepository;
  private authAccountUseCase: AuthAccountUseCase;
  private readonly encrypter: IEncrypter;

  constructor(
    encrypter: IEncrypter,
    accountRepository: IAccountRepository,
    authAccountUseCase: AuthAccountUseCase,
  ) {
    this.accountRepository = accountRepository;
    this.authAccountUseCase = authAccountUseCase;
    this.encrypter = encrypter;
  }

  async execute({
    email,
    password,
  }: ICreateAccountRequest): Promise<{accountCreated: Account; token: string}> {
    if (!email || !password) {
      throw new Error('Missing required fields');
    }

    const userFound = await this.accountRepository.findByEmail(email);

    if (userFound) {
      throw new Error('User already exists');
    }

    const hashPassword = await this.encrypter.encrypt(password);

    const response = await this.accountRepository.createAccount({
      email,
      password: hashPassword,
    });

    const token = await this.authAccountUseCase.execute({email, password});

    return {accountCreated: response, token};
  }
}

export default CreateAccountUseCase;
