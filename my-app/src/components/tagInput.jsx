// src/components/TagInput.jsx
import React from "react";
import styles from "./tagInput.module.css";

const TagInput = ({ tags, value, onChange, onAdd, onRemove, errorMessage }) => {
  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onAdd();
    }
  };

  return (
    <div className={styles.field}>
      <label>태그</label>
      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyUp={handleKeyUp}
        placeholder="태그를 입력 후 Enter"
        className={`${styles.input} ${errorMessage ? styles.errorInput : ""}`}
      />
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
      <div className={styles.tagList}>
        {tags.map((tag) => (
          <span key={tag} className={styles.tag}>
            #{tag}
            <button
              type="button"
              onClick={() => onRemove(tag)}
              className={styles.removeButton}
            >
              ✕
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TagInput;
