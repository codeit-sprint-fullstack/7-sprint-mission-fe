import express from "express";
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

// 상품 등록
router.post("/", createProduct);

// 상품 목록 조회
router.get("/", getProducts);

router.get("/:id", getProductById); // ✅ 상품 상세 조회
router.patch("/:id", updateProduct); // ✅ 상품 수정
router.delete("/:id", deleteProduct); // ✅ 상품 삭제

export default router;
