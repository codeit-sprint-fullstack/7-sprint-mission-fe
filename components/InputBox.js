import { useState } from "react";
import styles from "./InputBox.module.css";
import Image from "next/image";

export default function InputBox({ keyword, onChange }) {
  const handleChange = (e) => {
    const value = e.target.value;
    onChange(value);
  };

  return (
    <input
      className={styles.input}
      placeholder="검색할 상품을 입력해주세요"
      value={keyword}
      onChange={handleChange}
    />
  );
}
