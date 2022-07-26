import {PrismaClient} from '@prisma/client';
import PrismaRepository from '../../../../db/PrismaRepository';
import {Account} from '../../models/Account';
import {IAccountRepository, ICreateAccountDTO} from '../IAccountRepository';

class AccountRepository implements IAccountRepository {
  private db: PrismaClient;

  constructor() {
    this.db = PrismaRepository.getInstance();
  }

  createAccount({email, password}: ICreateAccountDTO): Promise<Account> {
    return this.db.account.create({
      data: {
        email,
        password,
        created_at: new Date(),
      },
    });
  }

  findByEmail(email: string): Promise<Account | null> {
    return this.db.account.findUnique({
      where: {
        email,
      },
    });
  }
}

export default AccountRepository;
