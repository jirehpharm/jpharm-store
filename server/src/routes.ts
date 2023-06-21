import { Router, Request, Response } from "express";

import productsRoutes from "./modules/products/routes";
import populateDataRoutes from "./modules/datafix/routes";

export default function (): Router {
  const router: Router = Router();

  //Example Import
  router.use("/products", productsRoutes);
  router.use("/datafix", populateDataRoutes);

  router.use("/healthCheck", (req: Request, res: Response) =>
    res.status(200).json({
      status: 200,
      statusText: "Store Server is up and running!",
    })
  );

  return router;
}
