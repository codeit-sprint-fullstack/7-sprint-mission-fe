// src/api/product.js
import axios from 'axios';

const API = axios.create({
  baseURL: 'http://localhost:5500/api',   // → 실제 당신의 백엔드 주소
});

// 1) 모든 상품 조회
export const fetchProducts = () =>
  API.get('/products').then(res => res.data);

// 2) 상품 등록
export const createProduct = product =>
  API.post('/products', product).then(res => res.data);

// (to-do) 상세 조회·수정·삭제 등도 여기에 추가 가능
