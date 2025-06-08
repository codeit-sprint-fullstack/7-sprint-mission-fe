import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import productRouter from "./routes/product.route.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// 기본 API 테스트
app.get("/", (req, res) => {
  res.send("🚀 PandaMarket API 서버 실행 중!");
});

// Product 라우터 연결
app.use("/api/products", productRouter);

// 에러 핸들러 (기본)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "서버 에러가 발생했습니다." });
});

const PORT = process.env.PORT || 5500;
app.listen(PORT, () => {
  console.log(`🚀 서버가 포트 ${PORT}에서 실행 중...`);
});
