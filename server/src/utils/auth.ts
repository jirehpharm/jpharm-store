// Importing the jwt library from the jsonwebtoken package
import jwt from "jsonwebtoken";

// Defining a variable to hold the secret key for JWT token generation. If the process environment variable JWT_SECRET exists, use it as the secret, otherwise use "secret" as the default value.
const jwtSecret = process.env.JWT_SECRET || "secret";

// Defining a function to generate JWT token. It takes in a string data and returns a token with the payload containing the provided data, signed using the jwtSecret, and set to expire after 4 weeks.
export const generateAuthToken = (data: string) => {
  return jwt.sign({ data }, jwtSecret, {
    expiresIn: "4w",
  });
};

// Defining a function to verify the authenticity of a JWT token. It takes in the token string and returns the payload if the token is valid and has not expired.
export const verifyAuthToken = (token: string) => {
  return jwt.verify(token, jwtSecret);
};

// Defining a function to decode a JWT token. It takes in the token string and returns the payload without verifying its authenticity.
export const decodeAuthToken = (token: string) => {
  return jwt.decode(token);
};
