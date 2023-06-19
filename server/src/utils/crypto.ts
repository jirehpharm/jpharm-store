import bcrypt from "bcrypt";

const SALT_COUNT = 10;

export const hashPassword = (password: string) => {
  const salt = bcrypt.genSaltSync(SALT_COUNT);
  const hashedPassword = bcrypt.hashSync(password, salt);
  return hashedPassword;
};

export default hashPassword;
