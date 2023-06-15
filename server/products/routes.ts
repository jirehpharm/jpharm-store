import express from "express";

import { getProductList } from "./controller";

export default function () {
  const router = express.Router();

  router.route("/fetchProductsData").post(getProductList);

  return router;
}
