const API_URL = 'https://sprint-mission-api.vercel.app/products';

export const getProductList = async (page, pageSize, keyword) => {
    try {
        const response = await fetch(`${API_URL}?page=${page}&pageSize=${pageSize}&keyword=${keyword}`);
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error('getProductList error:', error);
    }
};

export const getProduct = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`);
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error('getProduct error:', error);
    }
};

export const createProduct = async ({ name, description, price, tags, images }) => {
    try {
        const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, description, price, tags, images })
        });
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error('create error:', error);
    }
};

export const patchProduct = async (id, data) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
        });
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        return await response.json();
    } catch (error) {
        console.error('patch error:', error);
    }
};

export const deleteProduct = async (id) => {
    try {
        const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
        });
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const text = await response.text();
        return text ? JSON.parse(text) : {};
    } catch (error) {
        console.error('delete error:', error);
    }
};