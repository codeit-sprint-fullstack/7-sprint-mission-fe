// main.js
import {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
} from './ArticleService.js';

import {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
} from './ProductService.js';

const articleId = 10; // 실제 존재하는 게시글 ID
const productId = 21; // 실제 존재하는 상품 ID

async function testArticles() {
  await getArticleList(1, 5, 'test');
  await getArticle(articleId);
  await patchArticle(articleId, { title: '수정된 제목' });
}

async function testProducts() {
  await getProductList(1, 5, '검색어');
  await getProduct(productId);
  await patchProduct(productId, { price: 9500 });
}

// 아래 함수들은 테스트용으로 호출됩니다.
await testArticles(); // 게시글 함수 테스트
await testProducts(); // 상품 함수 테스트
