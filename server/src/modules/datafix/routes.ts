import express from "express";
import { populateData } from "./controller";

const router = express.Router();

router.post("/populate", populateData);

export default router;
