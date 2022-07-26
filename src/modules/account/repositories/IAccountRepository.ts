import {Account} from '../models/Account';

export interface ICreateAccountDTO {
  email: string;
  password: string;
}

export interface IAccountRepository {
  createAccount({email, password}: ICreateAccountDTO): Promise<Account>;
  findByEmail(email: string): Promise<Account | null>;
}
