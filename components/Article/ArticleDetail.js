// components/Article/ArticleDetail.js
import styles from "./ArticleDetail.module.css";
import Image from "next/image";
import Link from "next/link";
import profileIcon from "@/public/assets/icons/profile_icon.svg";
import CommentSection from "../Comment/CommentSection";
import { formatKoreanDate } from "@/utils/formatKrDate";
import ThumbsUpButton from "../ThumbsUpButton";

export default function ArticleDetail({ article }) {
  //@TODO 추천시 likeCount 상태관리하여 바로반영되게
  //@TODO 이미 눌렀었다면 파란색으로 미리 색칠해놓기
  return (
    <div className={styles.detail}>
      <h1 className={styles.pageTitle}>자유게시판</h1>

      <div className={styles.metaBox}>
        <Image src={profileIcon} alt="프로필 아이콘" width={24} height={24} />
        <span className={styles.nickname}>{article.user.nickname}</span>
        <span className={styles.date}>
          <span>{formatKoreanDate(article.createdAt)}</span>
        </span>
        <span className={styles.likes}>
          👍 {article.likeCount} 💬{article.commentCount}
        </span>
      </div>

      <h2 className={styles.title}>{article.title}</h2>

      <div className={styles.content}>
        <p>{article.content}</p>
        {article.image && (
          <Image
            src={article.image}
            alt={article.title}
            width={400}
            height={400}
            className={styles.mainImage}
          />
        )}
      </div>
      <ThumbsUpButton
        articleId={article.id}
        initialLiked={article.liked}
        initialLikeCount={article.likeCount}
      />
      <CommentSection articleId={article.id} />

      {/* 여기에 댓글, 수정/삭제, 스크랩,  컴포넌트 추가 */}
      <Link href="/freeboard" className={styles.backButton}>
        목록으로 돌아가기 ↩️
      </Link>
    </div>
  );
}
