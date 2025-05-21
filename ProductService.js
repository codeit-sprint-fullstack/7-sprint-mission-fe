import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://sprint-mission-api.vercel.app/products',
    timeout: 3000,
})

export async function getProductList(params = {}) {
    const res = await instance.get('', {
        params,
    });
    const data = res.data;
    return data;
}

export async function getProduct(id) {
    const res = await instance.get(`${id}`);
    const data = res.data;
    return data;
}

export async function createProduct(productData) {
    const res = await instance.post('', productData);
    const data = res.data;
    return data;
}

export async function patchProduct(id, productData) {
    const res = await instance.patch(`${id}`, productData);
    const data = res.data;
    return data;
}

export async function deleteProduct(id) {
    const res = await instance.delete(`${id}`);
    const data = res.data;
    return data;
}