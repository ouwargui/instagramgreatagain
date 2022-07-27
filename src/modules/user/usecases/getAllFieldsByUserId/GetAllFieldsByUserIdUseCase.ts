import {IUsersRepository} from '../../repositories/IUsersRepository';

class GetAllFieldsByUserIdUseCase {
  private usersRepository: IUsersRepository;

  constructor(usersRepository: IUsersRepository) {
    this.usersRepository = usersRepository;
  }

  async execute(user_id: string): Promise<any> {
    if (!user_id) {
      throw new Error('Missing required fields');
    }

    const userFound = await this.usersRepository.getAllFieldsById(user_id);

    return userFound;
  }
}

export default GetAllFieldsByUserIdUseCase;
