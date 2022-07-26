import {sign, verify, JwtPayload} from 'jsonwebtoken';
import {JWT_SECRET} from '../../../config/env';
import {IAuthenticator} from '../IAuthenticator';

class JWTAdapter implements IAuthenticator {
  sign(payload: string, subject?: string): string {
    const token = sign({email: payload}, JWT_SECRET!, {
      subject,
      expiresIn: '1d',
    });
    return token;
  }
  verify(token: string): string | JwtPayload {
    const isValid = verify(token, JWT_SECRET!);
    return isValid;
  }
}

export default JWTAdapter;
