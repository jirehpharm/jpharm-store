import express from "express";
import { Response } from "express";

import productsRoutes from "./products/routes";

export default function () {
  const router = express.Router();

  //Example Import
  router.use(productsRoutes());
  // router.use("/marketplace", marketplaceRoutes());

  router.use("/healthCheck", (req: Request, res: any) =>
    res.status(200).json({
      status: 200,
      statusText: "Store Server is up and running!",
    })
  );

  return router;
}
