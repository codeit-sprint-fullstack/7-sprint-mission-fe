// hooks/useComments.js
"use client";

import { useState, useEffect } from "react";
import {
  getArticleCommentsPath,
  postArticleCommentPath,
} from "@/constants/apiPath";
import { postJson } from "@/utils/apiRequest";

export default function useComments(articleId) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // 댓글 목록 가져오기
  useEffect(() => {
    const fetchComments = async () => {
      setLoading(true);
      try {
        const res = await fetch(getArticleCommentsPath(articleId));
        const data = await res.json();
        setComments(data.comments);
      } catch (err) {
        console.error("댓글 불러오기 실패:", err.message);
        setError("댓글을 불러오지 못했습니다.");
      } finally {
        setLoading(false);
      }
    };

    fetchComments();
  }, [articleId]);

  // 서버에 새 댓글 추가
  const addComment = async (content) => {
    try {
      const res = await postJson(postArticleCommentPath(articleId), {
        content,
      });
      setComments((prev) => [...prev, res.comment]);
      return res.comment;
    } catch (err) {
      console.error("댓글 작성 실패:", err.message);
      throw err;
    }
  };
  //화면에 다시뿌리기
  const addCommentToList = (comment) => {
    setComments((prev) => [...prev, comment]);
  };

  

  return {
    comments,
    loading,
    error,
    addComment,
    addCommentToList,
  };
}
