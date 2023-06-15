import express from "express";
import { getProductList } from "./controller";

const router = express.Router();

router.post("/list", getProductList);

export default router;
