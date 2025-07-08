// components/Comment/CommentItem.js
import Image from "next/image";
import styles from "./Comment.module.css";
import profileIcon from "@/public/assets/icons/profile_icon.svg";

export default function CommentItem({ comment }) {
  const { writer, content, createdAt } = comment;

  return (
    <div className={styles.commentItem}>
      <Image
        src={writer.image || profileIcon}
        alt="프로필 이미지"
        width={24}
        height={24}
        className={styles.avatar}
      />
      <div className={styles.contentBox}>
        <div className={styles.header}>
          <span className={styles.nickname}>{writer.nickname}</span>
          <span className={styles.date}>
            {new Date(createdAt).toLocaleDateString("ko-KR")}
          </span>
        </div>
        <p className={styles.text}>{content}</p>
      </div>
    </div>
  );
}
