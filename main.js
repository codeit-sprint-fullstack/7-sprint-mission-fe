import * as articles from './ArticleService.js';
import * as products from './ProductService.js';


articles.createArticle("문자열","문자열","문자열")
.then((data)=>{
  console.log("createArcticle결과:",data)
})
//성공

articles.patchArticle(195,{
  "title": "1",
  "content": "2",
  "image": "3"
})
.then((data)=>{
  console.log("patchArticle결과",data);
})
//성공

articles.getArticleList(1,1,"1")
.then((data)=>{
  console.log("getArticle결과",data);
})

articles.deleteArticle(47)
.then((data)=>{
  console.log("deleteArticle결과",data)
})


// products.createArticle();
// products.deleteArticle();
// products.getArticleList();
// products.patchArticle();