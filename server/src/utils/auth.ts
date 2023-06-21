import jwt from "jsonwebtoken";

const jwtSecret = process.env.JWT_SECRET || "secret";
const expiresIn = "1h";

/**
 * Generates an authentication token using the provided data.
 *
 * @param {string} data - The data to include in the token.
 * @return {string} The newly generated authentication token.
 */
export const generateAuthToken = (data: string) => {
  return jwt.sign({ data }, jwtSecret, {
    expiresIn,
  });
};

/**
 * Verifies the authenticity of a JWT token using the provided secret.
 *
 * @param {string} token - the JWT token to be verified
 * @return {*} the decoded token if it is valid, otherwise an error is thrown
 */
export const verifyAuthToken = (token: string) => {
  return jwt.verify(token, jwtSecret);
};
