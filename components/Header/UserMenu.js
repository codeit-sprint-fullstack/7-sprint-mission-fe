// components/Header/UserMenu.js
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";

export default function UserMenu() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    setUser(null);
    window.location.reload();
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
