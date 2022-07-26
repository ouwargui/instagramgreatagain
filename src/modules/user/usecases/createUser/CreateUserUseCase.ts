import {User} from '../../models/User';
import {IUsersRepository} from '../../repositories/IUsersRepository';

interface ICreateUser {
  username: string;
  bio: string;
  profile_pic?: string;
  account_id: number;
}

class CreateUserUseCase {
  private userRepository: IUsersRepository;

  constructor(userRepository: IUsersRepository) {
    this.userRepository = userRepository;
  }

  async execute({
    username,
    bio,
    profile_pic,
    account_id,
  }: ICreateUser): Promise<User> {
    const usernameFound = await this.userRepository.findByUsername(username);

    if (usernameFound) {
      throw new Error('Username already exists');
    }

    const userCreated = await this.userRepository.createUser({
      username,
      bio,
      profile_pic,
      account_id,
    });

    return userCreated;
  }
}

export default CreateUserUseCase;
