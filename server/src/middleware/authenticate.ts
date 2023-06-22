import { verifyAuthToken } from "../utils/auth";

export const authenticate = (
  req: any
): { success: boolean; message: string; user?: any } => {
  const token = req.headers["x-access-token"] || "";
  if (!token) {
    return {
      success: false,
      message: "Unauthorized Request! Token not found",
    };
  }

  const decoded = verifyAuthToken(token) as {
    data: string;
    exp: number;
    iat: number;
  };

  if (!decoded) {
    return {
      success: false,
      message: "Unauthorized Request! Invalid Token",
    };
  }

  const { data, exp } = decoded;

  if (Date.now() > exp * 1000) {
    return {
      success: false,
      message: "Unauthorized Request! Expired Token. Please login again",
    };
  }

  return {
    success: true,
    message: "User Authenticated!",
    user: JSON.parse(data),
  };
};
