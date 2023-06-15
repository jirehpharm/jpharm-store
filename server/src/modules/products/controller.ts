import { Request, Response } from "express";

import pg from "../../utils/database";

/**
 * Returns a list of products with their descriptions.
 * @param req - Express request object.
 * @param res - Express response object.
 * @returns Promise<void>
 */
export const getProductList = async (
  req: Request,
  res: Response<{ status: boolean; products: any[]; message?: string }>
): Promise<void> => {
  try {
    const products: any[] = await pg("product")
      .select("*")
      .join(
        "product_description",
        "product_description_product_id",
        "product.product_id"
      );

    res.status(200).json({
      status: true,
      products,
    });
  } catch (error: any) {
    res.status(500).json({
      status: false,
      message: error.message,
      products: [],
    });
  }
};
