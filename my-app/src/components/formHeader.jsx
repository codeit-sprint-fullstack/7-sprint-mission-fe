// src/components/formHeader.jsx
import React from 'react';
import styles from './formHeader.module.css';

export default function FormHeader({ title, onSubmit, loading }) {
  return (
    <div className={styles.header}>
      <h2>{title}</h2>
      <button
        type="button"
        className={styles.submitButton}
        onClick={onSubmit}
        disabled={loading}
      >
        {loading ? '등록 중' : '등  록'}
      </button>
    </div>
  );
}
