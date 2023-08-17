import express from "express";
import {getProducts} from "../controllers/client.js"

const router = express.Router();
router.get("/Products",getProducts)

export default router;