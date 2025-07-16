//components/Comment/CommentForm.js
"use client";

import { useState } from "react";
import styles from "./CommentForm.module.css";
import { postArticleCommentPath } from "@/constants/apiPath";
import { postJson } from "@/utils/apiRequest";
import { useUser } from "@/components/Contexts/UserContext";

export default function CommentForm({
  articleId,
  onSubmitSuccess,
  placeholderTxt,
}) {
  const { isLoggedIn } = useUser();
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!content.trim()) return;

    setLoading(true);
    setError("");

    try {
      const data = await postJson(postArticleCommentPath(articleId), {
        content,
      });
      setContent("");
      if (onSubmitSuccess) onSubmitSuccess(data.comment);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        className={styles.textarea}
        placeholder={
          isLoggedIn ? placeholderTxt : "로그인 후 댓글을 작성할 수 있어요"
        }
        value={content}
        onChange={(e) => setContent(e.target.value)}
        disabled={loading}
      />
      <button
        className={`${styles.submitButton} ${
          !isLoggedIn ? styles.disabled : ""
        }`}
        type="submit"
        disabled={loading || !isLoggedIn}
      >
        {loading ? "작성 중..." : "댓글 작성"}
      </button>
      {error && <p className={styles.error}>{error}</p>}
    </form>
  );
}
