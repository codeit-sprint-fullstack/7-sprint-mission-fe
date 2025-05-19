// ArticleService.js
import fetch from 'node-fetch';

const BASE_URL = 'https://sprint-mission-api.vercel.app/articles';

export function getArticleList(page, pageSize, keyword) {
  return fetch(BASE_URL + '?page=' + page + '&pageSize=' + pageSize + '&keyword=' + keyword)
    .then(function (res) {
      if (!res.ok) throw new Error('글 목록을 불러오는 데 실패했습니다. (상태코드: ' + res.status + ')');
      return res.json();
    })
    .catch(function (err) {
      console.error(err.message);
    });
}

export function getArticle(id) {
  return fetch(BASE_URL + '/' + id)
    .then(function (res) {
      if (!res.ok) throw new Error('글 정보를 불러오는 데 실패했습니다. (상태코드: ' + res.status + ')');
      return res.json();
    })
    .catch(function (err) {
      console.error(err.message);
    });
}

export function createArticle(data) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      title: data.title,
      content: data.content,
      image: data.image,
    }),
  })
    .then(function (res) {
      if (!res.ok) throw new Error('글 작성에 실패했습니다. (상태코드: ' + res.status + ')');
      return res.json();
    })
    .catch(function (err) {
      console.error(err.message);
    });
}

export function patchArticle(id, data) {
  return fetch(BASE_URL + '/' + id, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })
    .then(function (res) {
      if (!res.ok) throw new Error('글 수정에 실패했습니다. (상태코드: ' + res.status + ')');
      return res.text().then(text => text ? JSON.parse(text) : null); // PATCH/DELETE 응답이 비어 있을 때 JSON 파싱 에러를 방지
    })
    .catch(function (err) {
      console.error(err.message);
    });
}

export function deleteArticle(id) {
  return fetch(BASE_URL + '/' + id, {
    method: 'DELETE',
  })
    .then(function (res) {
      if (!res.ok) throw new Error('글 삭제에 실패했습니다. (상태코드: ' + res.status + ')');
      return res.text().then(text => text ? JSON.parse(text) : null); // PATCH/DELETE 응답이 비어 있을 때 JSON 파싱 에러를 방지
    })
    .catch(function (err) {
      console.error(err.message);
    });
}
