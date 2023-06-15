import pg from "../database";

const getProductList = async (req: any, res: any) => {
  try {
    const products = await pg("product")
      .select("*")
      .join("product_description", "product_description_product_id", "product.product_id");

    return res.status(200).json({
      status: true,
      products,
    });
  } catch (error: any) {
    return res.status(500).json({
      status: false,
      message: error.message,
      products: [],
    });
  }
};

export { getProductList };
