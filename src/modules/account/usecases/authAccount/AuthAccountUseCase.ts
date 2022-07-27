import {IAuthenticator} from '../../../../infra/authentication/IAuthenticator';
import {IEncrypter} from '../../../../infra/criptography/IEncrypter';
import {User} from '../../../user/models/User';
import {IAccountRepository} from '../../repositories/IAccountRepository';

interface IAuthAccount {
  email: string;
  password: string;
}

class AuthAccountUseCase {
  private accountRepository: IAccountRepository;
  private readonly encrypter: IEncrypter;
  private readonly authenticator: IAuthenticator;

  constructor(
    accountRepository: IAccountRepository,
    encrypter: IEncrypter,
    authenticator: IAuthenticator,
  ) {
    this.accountRepository = accountRepository;
    this.encrypter = encrypter;
    this.authenticator = authenticator;
  }

  async execute({
    email,
    password,
  }: IAuthAccount): Promise<{token: string; account_found: User | null}> {
    if (!email || !password) {
      throw new Error('Missing required fields');
    }

    const account_found = await this.accountRepository.findByEmail(email);

    if (!account_found) {
      throw new Error('Email or password invalid');
    }

    const passwordMatch = await this.encrypter.compare(
      password,
      account_found.password,
    );

    if (!passwordMatch) {
      throw new Error('Email or password invalid');
    }

    const token = this.authenticator.sign(email, account_found.id.toString());

    return {token, account_found: account_found.user};
  }
}

export default AuthAccountUseCase;
