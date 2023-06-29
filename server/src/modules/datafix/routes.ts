import express from "express";
import { populateData } from "./controller";

const router = express.Router();

router.get("/populate", populateData);

export default router;
