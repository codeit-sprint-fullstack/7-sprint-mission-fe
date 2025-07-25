// components/Comment/CommentItem.js
"use client";
import Image from "next/image";
import styles from "./Comment.module.css";
import profileIcon from "@/public/assets/icons/profile_icon.svg";
import { useUser } from "@/components/Contexts/UserContext";
import { useState } from "react";
import CommentMenu from "./CommentMenu";
import { formatKoreanDate } from "@/utils/formatKrDate";

export default function CommentItem({
  comment,
  onEdit,
  onDelete,
  onToggleLike,
}) {
  const { user } = useUser();
  const [menuOpen, setMenuOpen] = useState(false);
  const isMyComment = user?.id === comment.user.id;
  const toggleMenu = () => setMenuOpen((prev) => !prev);
  // const { user, content, createdAt } = comment;

  const handleClickLike = () => {
    if (!user) {
      //@TODO 비로그인 추천시 로직
      alert("로그인 후 이용해주세요");
      return;
    }
    onToggleLike?.(comment.id);
  };

  return (
    <div className={styles.commentItem}>
      <Image
        src={comment.user.image || profileIcon}
        alt="프로필 이미지"
        width={24}
        height={24}
        className={styles.avatar}
      />
      <div className={styles.contentBox}>
        <div className={styles.header}>
          <span className={styles.nickname}>{comment.user.nickname}</span>
          <span className={styles.date}>
            <span>{formatKoreanDate(comment.createdAt)}</span>
          </span>
          <button className={styles.likeButton} onClick={handleClickLike}>
            {comment.liked ? "❤️" : "🤍"} {comment.likeCount ?? 0}
          </button>

          {/*내꺼만 케밥아이콘달기 */}
          {isMyComment && (
            <div className={styles.menuWrapper}>
              <button className={styles.menuButton} onClick={toggleMenu}>
                ⋮
              </button>
              {menuOpen && (
                <CommentMenu
                  onEdit={() => {
                    toggleMenu();
                    onEdit(comment);
                  }}
                  onDelete={() => {
                    toggleMenu();
                    onDelete(comment.id);
                  }}
                />
              )}
            </div>
          )}
        </div>
        <p className={styles.text}>{comment.content}</p>
      </div>
    </div>
  );
}
