import {PrismaClient, User} from '@prisma/client';
import PrismaRepository from '../../../../db/PrismaRepository';
import {ICreateUserDTO, IUsersRepository} from '../IUsersRepository';

class UsersRepository implements IUsersRepository {
  private db: PrismaClient;

  constructor() {
    this.db = PrismaRepository.getInstance();
  }

  createUser({
    username,
    bio,
    profile_pic,
    account_id,
  }: ICreateUserDTO): Promise<User> {
    return this.db.user.create({
      data: {
        username,
        bio,
        profile_pic,
        account_id,
      },
    });
  }

  findByUsername(username: string): Promise<User | null> {
    return this.db.user.findUnique({
      where: {
        username,
      },
    });
  }
}

export default UsersRepository;
