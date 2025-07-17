import Image from "next/image";
import { useRef, useState } from "react";
import styles from "./DropOption.module.css";

export default function DropOption({ onPatch, onDelete }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={styles.box}
      onClick={() => {
        setIsOpen(true);
      }}
    >
      <Image
        className={styles.dots}
        src={"/ic_dots.svg"}
        width={24}
        height={24}
        alt="옵션 선택"
      />
      {isOpen && (
        <div
          className={styles.options}
          onClick={(e) => {
            e.stopPropagation();
          }}
        >
          <div className={styles.patch} onClick={onPatch}>
            수정하기
          </div>
          <div className={styles.delete} onClick={onDelete}>
            삭제하기
          </div>
          <div
            className={styles.background}
            onClick={() => {
              setIsOpen(false);
            }}
          ></div>
        </div>
      )}
    </div>
  );
}
