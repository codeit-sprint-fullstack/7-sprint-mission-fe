//components/Comment/CommentSection.js
"use client";

import { useEffect, useState } from "react";

import styles from "./CommentSection.module.css";
import CommentList from "./CommentList";
import LoadingSpinner from "../LoadingSpinner";
import CommentForm from "./CommentForm";

export default function CommentSection({ articleId }) {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://panda-market-api.vercel.app/articles/${articleId}/comments?limit=10`
    )
      .then((res) => res.json())
      .then((data) => setComments(data.list))
      .finally(() => setLoading(false));
  }, [articleId]);

  const handleNewComment = (newComment) => {
    setComments((prev) => [...prev, newComment]);
  };
  const placeholderTxt =
    comments.length === 0
      ? "아직 댓글이 없어요. 첫 댓글을 남겨보세요!"
      : "댓글을 입력하세요";
  return (
    <section className={styles.commentSection}>
      <h3 className={styles.commentTitle}>댓글</h3>

      {loading ? (
        <>
          <LoadingSpinner />
        </>
      ) : (
        <div className={styles.commentList}>
          <CommentList comments={comments} />
        </div>
      )}
      <CommentForm
        articleId={articleId}
        onSubmitSuccess={handleNewComment}
        placeholderTxt={placeholderTxt}
      />
    </section>
  );
}
