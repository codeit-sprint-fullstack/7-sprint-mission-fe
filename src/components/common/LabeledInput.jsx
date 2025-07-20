import styles from "./LabeledInput.module.css";

export default function LabeledInput({ label, id, error, ...props }) {
  return (
    <div className={styles.fieldWrapper}>
      <div className={styles.field}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        <input
          id={id}
          {...props}
          className={`${styles.input} ${error ? styles.inputError : ""}`}
        />
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}
