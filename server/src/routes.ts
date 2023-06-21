import { Router, Request, Response } from "express";

import authRoutes from "./modules/auth/routes";
import productsRoutes from "./modules/products/routes";

export default function (): Router {
  const router: Router = Router();

  //Example Import
  router.use("/auth", authRoutes);
  router.use("/products", productsRoutes);

  router.use("/healthCheck", (req: Request, res: Response) =>
    res.status(200).json({
      status: 200,
      statusText: "Store Server is up and running!",
    })
  );

  return router;
}
