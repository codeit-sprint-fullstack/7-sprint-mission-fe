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

  const handleEditComment = (comment) => {
    console.log("수정할 댓글:", comment);
    // @TODO: 수정 모드 진입 로직 작성
  };

  const handleDeleteComment = (commentId) => {
    console.log("삭제할 댓글 ID:", commentId);
    // TODO: 삭제 API 요청 후 목록 갱신
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
          <CommentList
            comments={comments}
            onEdit={handleEditComment}
            onDelete={handleDeleteComment}
          />
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
