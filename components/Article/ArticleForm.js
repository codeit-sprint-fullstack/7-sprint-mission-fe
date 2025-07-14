// components/Article/ArticleForm.js
"use client";

import { useState } from "react";
import styles from "./ArticleForm.module.css";

export default function ArticleForm({ onSubmit, initialData = {} }) {
  const [title, setTitle] = useState(initialData.title || "");
  const [content, setContent] = useState(initialData.content || "");
  //@TODO articleForm validate

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, content });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label className={styles.label}>
        <span>제 목</span>
        <input
          className={styles.input}
          type="text"
          placeholder="제목을 입력해주세요"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </label>

      <label className={styles.label}>
        <span>내 용</span>
        <textarea
          className={styles.textarea}
          placeholder="내용을 입력해주세요"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </label>

      <button type="submit" className={styles.submitButton}>
        등록
      </button>
    </form>
  );
}
