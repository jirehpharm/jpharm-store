import { Request, Response } from "express";
import prisma from "../../utils/prisma";
import { verifyPassword } from "../../utils/crypto";
import { generateAuthToken, verifyAuthToken } from "../../utils/auth";

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await prisma.customer.findUnique({
      where: { email },
      select: {
        full_name: true,
        email: true,
        customer_id: true,
        password: true,
        uuid: true,
      },
    });

    const isAuthenticated = await verifyPassword(password, user.password);
    if (!user || !isAuthenticated) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized Request!",
        token: "",
      });
    }

    delete user.password;
    const token = generateAuthToken(JSON.stringify(user));
    const decoded = verifyAuthToken(token) as { exp: number };

    return res.status(200).json({
      success: true,
      message: "User Authenticated!",
      token,
      expiresIn: decoded.exp,
      user,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
      token: "",
    });
  }
};
