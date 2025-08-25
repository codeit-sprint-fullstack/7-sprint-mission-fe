// components/Header/UserMenu.js
"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./Header.module.css";
import { useUser } from "../Contexts/UserContext";
import LoadingSpinner from "../LoadingSpinner";
import { postLogout } from "@/utils/apiRequest";

export default function UserMenu() {
  const { user, setUser, isFetchUserLoading } = useUser();
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await postLogout();
      setUser(null);
      router.push("/");
    } catch (err) {
      console.error("로그아웃 실패:", err.message);
    }
  };
  if (isFetchUserLoading) {
    return <LoadingSpinner />;
  }
  if (!user) {
    return (
      <Link href="/login">
        <button className={styles.loginBtn}>로그인</button>
      </Link>
    );
  }

  return (
    <div className={styles.userBox}>
      <span className={styles.userNickname}>{user.nickname}님</span>
      <button className={styles.logoutBtn} onClick={handleLogout}>
        로그아웃
      </button>
    </div>
  );
}
