import {PrismaClient} from '@prisma/client';
import PrismaRepository from '../../../../db/PrismaRepository';
import {User} from '../../../user/models/User';
import {Account} from '../../models/Account';
import {IAccountRepository, ICreateAccountDTO} from '../IAccountRepository';

class AccountRepository implements IAccountRepository {
  private db: PrismaClient;

  constructor() {
    this.db = PrismaRepository.getInstance();
  }

  async createAccount({email, password}: ICreateAccountDTO): Promise<Account> {
    return this.db.account.create({
      data: {
        email,
        password,
        created_at: new Date(),
      },
    });
  }

  async findByEmail(
    email: string,
  ): Promise<(Account & {user: User | null}) | null> {
    return this.db.account.findUnique({
      where: {
        email,
      },
      include: {
        user: true,
      },
    });
  }
}

export default AccountRepository;
