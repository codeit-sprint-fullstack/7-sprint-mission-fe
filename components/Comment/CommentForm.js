//components/Comment/CommentForm.js
"use client";

import { useState } from "react";
import styles from "./CommentForm.module.css";
import { postArticleCommentPath } from "@/constants/apiPath";
import { postJson } from "@/utils/apiRequest";

export default function CommentForm({
  articleId,
  onSubmitSuccess,
  placeholderTxt,
}) {
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
      if (onSubmitSuccess) onSubmitSuccess(data);
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
        placeholder={placeholderTxt}
        value={content}
        onChange={(e) => setContent(e.target.value)}
        disabled={loading}
      />
      <button className={styles.submitButton} type="submit" disabled={loading}>
        {loading ? "작성 중..." : "댓글 작성"}
      </button>
      {error && <p className={styles.error}>{error}</p>}
    </form>
  );
}
