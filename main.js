import { getArticleList, getArticle, createArticle, patchArticle, deleteArticle } from './ArticleService.js'
import { getProductList, getProduct, createProduct, patchProduct, deleteProduct } from './ProductService.js'

//예제가 전부다 정상 작동을 안해요! 이유가 뭘까요...
//아티클 예제
const data1 = await getArticleList()
    .then(resp => {
        console.log(resp.data);
    })
    .catch(e => {
        if (e.response) {
            console.log(e.message);
        } else {
            console.log('리퀘스트가 실패했습니다.');
        }
    })

const data2 = await getArticle(10)
    .then(resp => {
        console.log(resp.data);
    })
    .catch(e => {
        if (e.response) {
            console.log(e.message);
        } else {
            console.log('리퀘스트가 실패했습니다.');
        }
    })

// 프로덕트 예제
try {
  const data = await createProduct({
    name: 'example', 
    description: 'example', 
    price: 'example', 
    tags: 'example', 
    images: 'example',
  });
  console.log(data);
} catch (e) {
  if (e.response) {
    console.log(e.message);
  } else {
    console.log('리퀘스트가 실패했습니다.')
  }
}