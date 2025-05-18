import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://sprint-mission-api.vercel.app/articles',
    timeout: 3000,
})

export async function getArticleList(params = {}) {
    const res = await instance.get('', {
        params,
    });
    const data = res.data;
    return data;
}

export async function getArticle(id) {
    const res = await instance.get(`${id}`);
    const data = res.data;
    return data;
}

export async function createArticle(articleData) {
    const res = await instance.post('', articleData);
    const data = res.data;
    return data;
}

export async function patchArticle(id, articleData) {
    const res = await instance.patch(`${id}`, articleData);
    const data = res.data;
    return data;
}

export async function deleteArticle(id) {
    const res = await instance.delete(`${id}`);
    const data = res.data;
    return data;
}