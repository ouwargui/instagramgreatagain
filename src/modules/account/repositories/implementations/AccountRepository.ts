import {PrismaClient} from '@prisma/client';
import PrismaRepository from '../../../../db/PrismaRepository';
import {IEncrypter} from '../../../../infra/criptography/IEncrypter';
import {Account} from '../../models/Account';
import {IAccountRepository, ICreateAccountDTO} from '../IAccountRepository';

class AccountRepository implements IAccountRepository {
  private db: PrismaClient;
  private readonly encrypter: IEncrypter;

  constructor(encrypter: IEncrypter) {
    this.db = PrismaRepository.getInstance();
    this.encrypter = encrypter;
  }

  async createAccount({email, password}: ICreateAccountDTO): Promise<Account> {
    const hashPassword = await this.encrypter.encrypt(password);
    return this.db.account.create({
      data: {
        email,
        password: hashPassword,
        created_at: new Date(),
      },
    });
  }

  async findByEmail(email: string): Promise<Account | null> {
    return this.db.account.findUnique({
      where: {
        email,
      },
    });
  }
}

export default AccountRepository;
