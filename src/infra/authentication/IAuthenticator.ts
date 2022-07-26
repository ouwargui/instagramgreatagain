import {JwtPayload} from 'jsonwebtoken';

export interface IAuthenticator {
  sign(payload: string, subject?: string): string;
  verify(token: string): string | JwtPayload;
}
