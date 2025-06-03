import {
  getArticleList,
  getArticle,
  createArticle,
  patchArticle,
  deleteArticle,
} from "./articleService.js";

import {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
} from "./productService.js";

const myArticle = {
  title: "wjtestArticle",
  content: "wj content test",
  image: "codeit.com",
};

const myProduct = {
  name: "wjtest",
  description: "ddtest",
  price: 54321,
  tags: ["test", "wj"],
  images: ["https://codeit.com"],
};
const myErrProduct = {
  name: "wjtest2",
  description: "ddtest",
  price: -154321,
  tags: ["test", "wj"],
  images: ["https://codeit.com"],
};



// getArticleList(1, 5, "").then(console.log);
// getArticleList(-1, 5, ""); // 500err
// getArticle(38).then(console.log);
// getArticle(99999);//404err

// createArticle(myArticle).then(console.log);
// createArticle(myProduct).then(console.log);//400err

// patchArticle(272, {
//   title: "patch",
//   content: "patch",
//   image: "naver.com",
// }).then(console.log);
// patchArticle(272, myProduct).then(console.log);//잘못된 키로 보내면 걍 씹음 에러는 안일어남
// getArticle(272).then(console.log);

// deleteArticle(272).then(console.log);
// deleteArticle(272).then(console.log);//이미 지워서 없으면 404err

/**************************************************/

// console.log(await getProductList(1, 5, ""));
// getProductList(1, 5, "").then(console.log);
// getProductList(-1, 5, ""); // 500err

// getProduct(29).then(console.log);
// getProduct(-99999); //404err

// createProduct(myProduct).then(console.log);
// getProduct(198).then(console.log); //잘 들어옴
// createProduct({ price: 0 }); //400err
// createProduct(myErrProduct).then(console.log); //price 음수 400err

// createProduct({
//   name: "wjtest2",
//   description: "ddtest",
//   price: 154321,
//   images: ["https://codeit.com"],
// }).then(console.log); //request body 키값 누락시 400err

// patchProduct(200, myProduct).then(console.log);
// patchProduct(200, myErrProduct); //400err

// deleteProduct(200).then(console.log);
// getProduct(200); //404err
// deleteProduct(99999);//404err
