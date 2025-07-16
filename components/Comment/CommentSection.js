//components/Comment/CommentSection.js
"use client";

import styles from "./CommentSection.module.css";
import CommentList from "./CommentList";
import LoadingSpinner from "../LoadingSpinner";
import CommentForm from "./CommentForm";
import useComments from "@/hooks/useComments";

export default function CommentSection({ articleId }) {
  const { comments, loading, error, addCommentToList } = useComments(articleId);

  const handleNewComment = (newComment) => {
    addCommentToList(newComment);
  };

  const placeholderTxt =
    comments.length === 0
      ? "아직 댓글이 없어요. 첫 댓글을 남겨보세요!"
      : "댓글을 입력하세요";
  return (
    <section className={styles.commentSection}>
      <h3 className={styles.commentTitle}>댓글</h3>

      {loading ? (
        <>
          <LoadingSpinner />
        </>
      ) : (
        <div className={styles.commentList}>
          <CommentList comments={comments} />
        </div>
      )}
      <CommentForm
        articleId={articleId}
        onSubmitSuccess={handleNewComment}
        placeholderTxt={placeholderTxt}
      />
    </section>
  );
}
