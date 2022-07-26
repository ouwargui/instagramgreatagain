import {Account} from '../../models/Account';
import AccountRepository from '../../repositories/implementations/AccountRepository';

interface ICreateAccountRequest {
  email: string;
  password: string;
}

class CreateAccountUseCase {
  private accountRepository: AccountRepository;

  constructor(accountRepository: AccountRepository) {
    this.accountRepository = accountRepository;
  }

  async execute({email, password}: ICreateAccountRequest): Promise<Account> {
    if (!email || !password) {
      throw new Error('Missing required fields');
    }

    const userFound = await this.accountRepository.findByEmail(email);

    if (userFound) {
      throw new Error('User already exists');
    }

    const response = await this.accountRepository.createAccount({
      email,
      password,
    });

    return response;
  }
}

export default CreateAccountUseCase;
