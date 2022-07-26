import bcrypt from 'bcrypt';
import {IEncrypter} from '../IEncrypter';

export class BcryptAdapter implements IEncrypter {
  private readonly salt: number;

  constructor() {
    this.salt = 12;
  }

  async encrypt(value: string): Promise<string> {
    const hash = await bcrypt.hash(value, this.salt);
    return hash;
  }
}
