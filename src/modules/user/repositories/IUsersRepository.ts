import {User} from '../models/User';

export interface ICreateUserDTO {
  username: string;
  bio: string;
  profile_pic?: string;
  account_id: number;
}

export interface IUsersRepository {
  createUser({
    username,
    bio,
    profile_pic,
    account_id,
  }: ICreateUserDTO): Promise<User>;
  findByUsername(username: string): Promise<User | null>;
  getAllFieldsById(id: string): Promise<any>; // TODO: type this
}
