import {
    getArticleList,
    getArticle,
    createArticle,
    patchArticle,
    deleteArticle
} from './ArticleService.js';

import {
    getProductList,
    getProduct,
    createProduct,
    patchProduct,
    deleteProduct
} from './ProductService.js';

/*
getArticleList(1, 10, '')
.then(data => {
    console.log('Article List:', data);
});
getArticle('265')
.then(data => {
    console.log('Article :', data);
});
createArticle({
    title : "코드잇 프로필 기본 이미지",
    content : "이것은 코드잇 프로필 기본 이미지입니다.",
    image : "https://codeit-images.codeit.com/profile/default_profile.png"
})
.then(data => {
    console.log('New Article :', data);
});
patchArticle('266', { 
    title: '코드잇 프로필 이미지 수정' 
})
.then(data => {
    console.log('Update Article :', data);
});
deleteArticle('270')
.then(data => {
    console.log('Delete Article:', data);
});
*/

// ProductService 테스트
/*
(async () => {
  console.log(await getProductList(1, 10, ''));
  console.log(await getProduct('194'));
  console.log(await createProduct({
    name: '신상 키보드',
    description: '저소음 바나나축',
    price: 154000,
    tags: ['tech', 'keyboard'],
    images: ['https://shopping-phinf.pstatic.net/main_5373331/53733319430.20250515112741.jpg']
  }));
  console.log(await patchProduct('195', { price: 143000 }));
  console.log(await deleteProduct('196'));
})();
*/

