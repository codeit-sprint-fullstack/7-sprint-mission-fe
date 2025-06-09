import express from "express";
import multer from "multer";
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/product.controller.js";

const router = express.Router();

// Multer 설정: uploads/ 폴더에 파일을 저장, 최대 5개까지
const upload = multer({
  dest: "uploads/", // 실제로는 diskStorage로 경로+이름을 더 정교하게 지정
  limits: { files: 5 },
});

// 상품 등록

//추후 미드웨어 폴더로 리팩토링 예정
// POST /products 경로에 Multer 미들웨어 적용
// ✨ 이미지 업로드를 처리하도록 upload.array('images') 미들웨어 추가
router.post("/", upload.array("images", 5), createProduct);
//// FormData 에서 append("images", file) 한 키 이름과 일치해야함
// images.forEach((imgObj, i) => {
//   formData.append("images", imgObj.file); // key: images, 서버에서 multipart-parser로 수신
//});

// 상품 목록 조회
router.get("/", getProducts);

router.get("/:id", getProductById); // ✅ 상품 상세 조회
router.patch("/:id", updateProduct); // ✅ 상품 수정
router.delete("/:id", deleteProduct); // ✅ 상품 삭제

export default router;
