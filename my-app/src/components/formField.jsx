// src/components/formField.jsx
import React from "react";
import styles from "./formField.module.css";

export default function FormField({
  label,
  children, // input 혹은 textarea
  errorMessage, // validation error
}) {
  return (
    <div className={styles.field}>
      <label className={styles.label}>{label}</label>
      {children}
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
    </div>
  );
}
