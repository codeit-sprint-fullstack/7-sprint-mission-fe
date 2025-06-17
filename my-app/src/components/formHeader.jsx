// src/components/formHeader.jsx
import React from "react";
import styles from "./formHeader.module.css";

export default function FormHeader({ title, onSubmit, loading, disabled }) {
  return (
    <div className={styles.header}>
      <h2>{title}</h2>
      <button
        type="button"
        onClick={onSubmit}
        disabled={disabled || loading}
        className={`${styles.button} ${
          disabled ? styles.buttonDisabled : styles.buttonEnabled
        }`}
      >
        {loading ? "등록 중" : "등  록"}
      </button>
    </div>
  );
}
