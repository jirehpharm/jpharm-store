import { decodeAuthToken } from "../utils/auth";

/**
 * Authenticates the user by decoding the token from the request headers and checking if it has expired.
 *
 * @param {any} req - the request object containing the token
 * @return {{success: boolean, message?: string, userData?: any}} - an object containing a success flag,
 * optional message, and optional user data if authentication is successful
 */

export const authenticate = (req: any) => {
  // Get the token from the request headers
  const token = req.headers["x-access-token"] || "";

  // If there is no token, return an error
  if (!token) {
    return {
      success: false,
      message: "Unauthorized Request",
    };
  }

  // Decode the token to get the user data and expiration time
  const decoded = decodeAuthToken(token) as {
    data: string;
    exp: number;
    iat: number;
  };

  // If the token is invalid, return an error
  if (!decoded) {
    return {
      success: false,
      message: "Unauthorized Request",
    };
  }

  // Get the user data and expiration time from the decoded token
  const { data, exp } = decoded;

  // Check if the token has expired
  if (Date.now() > exp * 1000) {
    return {
      success: false,
      message: "Session Expired! Please Login Again",
    };
  }

  // If the token is valid and has not expired, return the user data
  return {
    success: true,
    userData: JSON.parse(data),
  };
};
