const API_URL = 'https://sprint-mission-api.vercel.app/articles';

// 목록 조회
export const getArticleList = async(page, pageSize, keyword) =>{
    return fetch(
        `${API_URL}?page=${page}&pageSize=${pageSize}&keyword=${keyword}`
    )
    .then(response => {
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        return response.json();
    })
    .catch(error => console.error('getArticleList error:', error));
}
  
// 상세 조회
export const getArticle = (id) =>{
    return fetch(`${API_URL}/${id}`)
    .then(response => {
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        return response.json();
    })
    .catch(error => console.error('getArticle error:', error));
}

// 생성    
export const createArticle = ({ title, content, image }) =>{
    return fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, content, image })
    })
    .then(response => {
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        return response.json();
    })
    .catch(error => console.error('create error:', error));
}

// 수정
export const patchArticle = (id, data) =>{
    return fetch(`${API_URL}/${id}`, {
        method: 'PATCH',
        headers: { 
            'Content-Type': 'application/json' 
        },
        body: JSON.stringify(data)
    })
    .then(response => {
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        return response.json();
    })
    .catch(error => console.error('patch error:', error));
}


// 삭제
export const deleteArticle = (id) =>{
    return fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
    })
    .then(response => {
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        return response.text().then(text => {
            return text ? JSON.parse(text) : {};
        });
    })
    .catch(error => console.error('delete error:', error));
}