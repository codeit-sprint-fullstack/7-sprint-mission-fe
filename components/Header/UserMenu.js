// components/Header/UserMenu.js
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import { useUser } from "../Contexts/UserContext";

export default function UserMenu() {
  const { user, setUser, fetchUser } = useUser();

  //@TODO fetch부분 리팩토링
  const handleLogout = async () => {
    try {
      await fetch("http://localhost:4000/auth/logout", {
        method: "POST",
        credentials: "include",
      });
      setUser(null);
      window.location.reload(); // 상태 갱신
    } catch (err) {
      console.error("로그아웃 실패:", err);
    }
  };

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
