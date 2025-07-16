// components/Comment/CommentList.js
import CommentItem from "./CommentItem";
import styles from "./Comment.module.css";

export default function CommentList({ comments = [], onEdit, onDelete }) {
  return (
    <div className={styles.commentList}>
      {comments.length === 0 ? (
        <p className={styles.empty}>댓글이 없습니다.</p>
      ) : (
        comments.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
}
