import axios from "axios";
import testType from "./validType";

export async function getComments(type, id, setDataFn, loadingFn) {
  testType(type);

  const comment = type === "article" ? "aComment" : "pComment";

  loadingFn(true);
  try {
    const res = await axios.get(`http://localhost:5000/${comment}/${id}`);
    setDataFn(res.data);
  } catch (e) {
    console.error(e);
  } finally {
    loadingFn(false);
  }
}

// 상품인지 자유게시물인지 타입, 이 코멘트가 달릴 원본 글의 아이디, 작성한 이용자의 아이디, 실제로 달릴 코멘트
export async function postComments(type, id, userId, content) {
  testType(type);
  const comment = type === "article" ? "aComment" : "pComment";

  try {
    const res = await axios.post(`http://localhost:5000/${comment}/${id}`, {
      data: { userId, content },
    });
  } catch (e) {
    console.error(e);
  }
}

export async function patchComments(type, id, commentId) {
  testType(type);
  const comment = type === "article" ? "aComment" : "pComment";
  try {
    const res = await axios.patch(`http://localhost:5000/${comment}/${id}`, {
      data: { content: value },
      id: commentId,
    });
    return res.data;
  } catch (e) {
    console.error(e);
  }
}

export async function deleteComments(type, id, commentId) {
  testType(type);
  const comment = type === "article" ? "aComment" : "pComment";
  try {
    const res = await axios.patch(`http://localhost:5000/${comment}/${id}`, {
      data: { deleted: true },
      id: commentId,
    });
    return res.data;
  } catch (e) {
    console.error(e);
  }
}
