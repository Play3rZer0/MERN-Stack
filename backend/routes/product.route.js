import express from "express";
import {
  deleteProduct,
  getProducts,
  createProduct,
  updateProduct,
  getProductById,
} from "../controllers/product.controller.js";

//console.log(process.env.MONGO_URI);

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProductById);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

export default router;
