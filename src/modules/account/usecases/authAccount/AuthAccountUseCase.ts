import {IAuthenticator} from '../../../../infra/authentication/IAuthenticator';
import {IEncrypter} from '../../../../infra/criptography/IEncrypter';
import AccountRepository from '../../repositories/implementations/AccountRepository';

interface IAuthAccount {
  email: string;
  password: string;
}

class AuthAccountUseCase {
  private accountRepository: AccountRepository;
  private readonly encrypter: IEncrypter;
  private readonly authenticator: IAuthenticator;

  constructor(
    accountRepository: AccountRepository,
    encrypter: IEncrypter,
    authenticator: IAuthenticator,
  ) {
    this.accountRepository = accountRepository;
    this.encrypter = encrypter;
    this.authenticator = authenticator;
  }

  async execute({email, password}: IAuthAccount): Promise<string> {
    const userFound = await this.accountRepository.findByEmail(email);

    if (!userFound) {
      throw new Error('Email or password invalid');
    }

    const passwordMatch = await this.encrypter.compare(
      password,
      userFound.password,
    );

    if (!passwordMatch) {
      throw new Error('Email or password invalid');
    }

    const token = this.authenticator.sign(email, userFound.id.toString());

    return token;
  }
}

export default AuthAccountUseCase;
