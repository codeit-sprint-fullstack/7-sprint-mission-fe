import Image from "next/image";
import { useState } from "react";
import styles from "./DropOption.module.css";

export default function DropOption() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.box}>
      <Image
        className={styles.dots}
        src={"/ic_dots.svg"}
        width={24}
        height={24}
        alt="옵션 선택"
        onClick={() => {
          setIsOpen(true);
        }}
      />
      {isOpen && (
        <div className={styles.options}>
          <div className={styles.option}>수정하기</div>
          <div className={styles.option}>삭제하기</div>
        </div>
      )}
    </div>
  );
}
