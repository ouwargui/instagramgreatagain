import {NextFunction, Request, Response} from 'express';
import JWTAdapter from '../infra/authentication/implementations/JWTAdapter';

export async function AuthHandler(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({message: 'Token not provided'});
  }

  const token = authHeader.split(' ')[1];

  const jwtAdapter = new JWTAdapter();

  try {
    const {sub} = jwtAdapter.verify(token);

    req.account_id = sub as string;

    return next();
  } catch (err) {
    return res.status(401).json({message: 'Token invalid'});
  }
}
