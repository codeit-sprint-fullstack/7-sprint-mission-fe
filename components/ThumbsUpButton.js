// components/ThumbsUpButton.js
"use client";
import { useState } from "react";
import styles from "./ThumbsUpButton.module.css";
import { postToggleArticleLike } from "@/utils/apiRequest";

export default function ThumbsUpButton({
  articleId,
  initialLiked,
  initialLikeCount,
}) {
  const [liked, setLiked] = useState(initialLiked || false);
  const [likeCount, setLikeCount] = useState(initialLikeCount || 0);
  const [loading, setLoading] = useState(false);

  const handleLikeToggle = async () => {
    if (loading) return;
    setLoading(true);

    try {
      const data = await postToggleArticleLike(articleId);
      setLiked(data.liked);
      setLikeCount(data.likeCount);
      console.log("추천 수", data.likeCount);
    } catch (err) {
      console.error("추천 실패:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      className={`${styles.button} ${liked ? styles.liked : ""}`}
      onClick={handleLikeToggle}
      disabled={loading}
    >
      👍 개추 {likeCount > 9 ? "9+" : likeCount}
    </button>
  );
}
