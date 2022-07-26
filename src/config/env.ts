const {JWT_SECRET, AWS_REGION, AWS_BUCKET} = process.env;

export function checkVars() {
  if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is required');
  }

  if (!AWS_REGION || !AWS_BUCKET) {
    throw new Error('AWS envs are required');
  }
}

export {JWT_SECRET, AWS_REGION, AWS_BUCKET};
