import Image from "next/image";
import DropOption from "./DropOption";
import styles from "./CommentList.module.css";
import dateFormat from "@/utils/dateFormat";

function Comment({ comment }) {
  return (
    <div className={styles.comment}>
      <div className={styles.content}>
        <div className={styles.text}>{comment.content}</div>
        <DropOption />
      </div>
      <div className={styles.info}>
        <Image
          className={styles.userImg}
          src="/user-default-img.svg"
          width={32}
          height={32}
          alt="유저 이미지"
        />
        <div className={styles.detail}>
          <div className={styles.nickname}>{comment.user.nickname}</div>
          <div className={styles.date}>{dateFormat(comment.updatedAt)}</div>
        </div>
      </div>
    </div>
  );
}

export default function CommentList({ data }) {
  return (
    <div>
      {data.AComment.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </div>
  );
}
