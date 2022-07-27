import {
  File,
  IFileUploader,
} from '../../../../infra/fileUploader/IFileUploader';
import {User} from '../../models/User';
import {IUsersRepository} from '../../repositories/IUsersRepository';

interface ICreateUser {
  username: string;
  bio: string;
  profile_pic_file: File;
  account_id: number;
}

class CreateUserUseCase {
  private userRepository: IUsersRepository;
  private fileUploader: IFileUploader;

  constructor(userRepository: IUsersRepository, fileUploader: IFileUploader) {
    this.userRepository = userRepository;
    this.fileUploader = fileUploader;
  }

  async execute({
    username,
    bio,
    profile_pic_file,
    account_id,
  }: ICreateUser): Promise<User> {
    if (!username || !bio || !account_id) {
      throw new Error('Missing required fields');
    }

    const usernameFound = await this.userRepository.findByUsername(username);

    if (usernameFound) {
      throw new Error('Username already exists');
    }

    const profile_pic = await this.fileUploader.upload(profile_pic_file);

    const userCreated = await this.userRepository.createUser({
      username,
      bio,
      profile_pic: profile_pic[0] ?? '',
      account_id,
    });

    return userCreated;
  }
}

export default CreateUserUseCase;
