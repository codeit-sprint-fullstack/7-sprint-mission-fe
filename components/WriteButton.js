// components/WriteButton.js
"use client";

import { useUser } from "@/components/Contexts/UserContext";
import { useRouter } from "next/navigation";
import styles from "./WriteButton.module.css";

export default function WriteButton() {
  const { isLoggedIn } = useUser();
  const router = useRouter();

  const handleClick = () => {
    if (!isLoggedIn) {
      alert("로그인이 필요합니다!");
      router.push("/login");
      return;
    }

    router.push("/articles/new");
  };

  return (
    <button onClick={handleClick} className={styles.writeButton}>
      글쓰기
    </button>
  );
}
