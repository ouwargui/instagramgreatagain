const {JWT_SECRET} = process.env;

export function checkVars() {
  if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is required');
  }
}

export {JWT_SECRET};
