// ProductService.js
import axios from 'axios';
import fetch from 'node-fetch';

const BASE_URL = 'https://sprint-mission-api.vercel.app/products';

export async function getProductList(page, pageSize, keyword) {
  try {
    const res = await axios.get(BASE_URL, {
      params: { page: page, pageSize: pageSize, keyword: keyword },
    });
    return res.data;
  } catch (err) {
    console.error('상품 목록을 불러오는 데 실패했습니다: ' + (err.response?.data?.message || err.message));
  }
}

export async function getProduct(id) {
  try {
    const res = await axios.get(BASE_URL + '/' + id);
    return res.data;
  } catch (err) {
    console.error('상품 정보를 불러오는 데 실패했습니다: ' + (err.response?.data?.message || err.message));
  }
}

export async function createProduct(data) {
  try {
    const res = await axios.post(BASE_URL, {
      name: data.name,
      description: data.description,
      price: data.price,
      tags: data.tags,
      images: data.images,
    });
    return res.data;
  } catch (err) {
    console.error('상품 등록에 실패했습니다: ' + (err.response?.data?.message || err.message));
  }
}

export async function patchProduct(id, data) {
  try {
    const res = await axios.patch(BASE_URL + '/' + id, data);
    return res.data;
  } catch (err) {
    console.error('상품 수정에 실패했습니다: ' + (err.response?.data?.message || err.message));
  }
}

export async function deleteProduct(id) {
  try {
    const res = await axios.delete(BASE_URL + '/' + id);
    return res.data;
  } catch (err) {
    console.error('상품 삭제에 실패했습니다: ' + (err.response?.data?.message || err.message));
  }
}
