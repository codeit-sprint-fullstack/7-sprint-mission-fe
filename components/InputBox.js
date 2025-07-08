import { useState } from "react";
import styles from "./InputBox.module.css";
import Image from "next/image";

export default function InputBox() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setValue(value);
  };

  return (
    <input
      className={styles.input}
      placeholder="검색할 상품을 입력해주세요"
      value={value}
      onChange={handleChange}
    />
  );
}
