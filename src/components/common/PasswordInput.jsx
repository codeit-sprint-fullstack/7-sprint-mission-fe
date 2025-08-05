import Image from "next/image";
import styles from "./PasswordInput.module.css";
import { useState } from "react";

export default function PasswordInput({ label, id, error, ...props }) {
  const [visible, setVisible] = useState(false);

  return (
    <div className={styles.fieldWrapper}>
      <div className={styles.field}>
        <label htmlFor={id} className={styles.label}>
          {label}
        </label>
        <div className={styles.inputWrapper}>
          <input
            id={id}
            {...props}
            type={visible ? "text" : "password"}
            className={`${styles.input} ${error ? styles.inputError : ""}`}
          />
          <button
            type="button"
            onClick={() => setVisible(!visible)}
            className={styles.toggleButton}
          >
            <Image
              width={24}
              height={24}
              src={
                visible
                  ? "/images/icons/btn_visibility_on.svg"
                  : "/images/icons/btn_visibility_off.svg"
              }
              alt={visible ? "비밀번호 숨기기" : "비밀번호 보기"}
              className={styles.icon}
            />
          </button>
        </div>
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}
