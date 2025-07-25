import { useState } from "react";
import styles from "./InputBox.module.css";
import Image from "next/image";

export default function InputBox({
  keyword,
  onChange,
  placeholder,
  size = "default",
  secret = false,
}) {
  const handleChange = (e) => {
    const value = e.target.value;
    onChange(value);
  };

  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      value={keyword}
      onChange={handleChange}
    />
  );
}
