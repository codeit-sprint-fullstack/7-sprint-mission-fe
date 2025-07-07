import styles from "./ArticleDetail.module.css";
import Image from "next/image";
import Link from "next/link";
import profileIcon from "@/public/assets/icons/profile_icon.svg";

export default function ArticleDetail({ article }) {
  return (
    <div className={styles.detail}>
      <h1 className={styles.pageTitle}>자유게시판</h1>

      <div className={styles.metaBox}>
        <Image src={profileIcon} alt="프로필 아이콘" width={24} height={24} />
        <span className={styles.nickname}>{article.writer.nickname}</span>
        <span className={styles.date}>
          {new Date(article.createdAt).toLocaleDateString()}
        </span>
        <span className={styles.likes}>❤️ {article.likeCount}</span>
      </div>

      <h2 className={styles.title}>{article.title}</h2>

      <div className={styles.content}>
        <p>{article.content}</p>
        {article.image && (
          <Image
            src={article.image}
            alt={article.title}
            width={400}
            height={300}
            className={styles.mainImage}
          />
        )}
      </div>

      {/* 여기에 댓글, 수정/삭제, 스크랩, 공감 버튼 컴포넌트 추가 */}
      <Link href="/freeboard" className={styles.backButton}>
        목록으로 돌아가기 ↩️
      </Link>
    </div>
  );
}
