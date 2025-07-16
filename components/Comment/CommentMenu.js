// components/Comment/CommentMenu.js
"use client";

import styles from "./CommentMenu.module.css";

export default function CommentMenu({ onEdit, onDelete }) {
  return (
    <div className={styles.menu}>
      <button onClick={onEdit}>수정하기</button>
      <button onClick={onDelete}>삭제하기</button>
    </div>
  );
}
