import Image from "next/image";
import DropOption from "./DropOption";
import styles from "./CommentList.module.css";
import dateFormat from "@/utils/dateFormat";
import { useState } from "react";
import CustomButtonSquare from "./CustomButtonSquare";
import validInput from "@/utils/validInput";
import axios from "axios";

function Comment({ comment, articleId, onRefetch }) {
  const [isPatchMode, setIsPatchMode] = useState(false);
  const [value, setValue] = useState(comment.content);

  const handlePatchComment = async () => {
    const res = await axios.patch(
      `http://localhost:5000/aComment/${articleId}`,
      {
        data: { content: value },
        id: comment.id,
      }
    );
    setIsPatchMode(false);
    onRefetch();
    return res.data;
  };

  const handleDeleteComment = async () => {
    const res = await axios.patch(
      `http://localhost:5000/aComment/${articleId}`,
      {
        data: { deleted: true },
        id: comment.id,
      }
    );
    onRefetch();
    return res.data;
  };

  if (isPatchMode) {
    return (
      <div className={styles.postComment}>
        <textarea
          className={styles.input}
          placeholder="댓글을 입력해 주세요"
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <div className={styles.btn}>
          <CustomButtonSquare
            text={`수정 완료`}
            onClick={handlePatchComment}
            valid={validInput(value)}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={styles.comment}>
      <div className={styles.content}>
        <div className={styles.text}>{comment.content}</div>
        <DropOption
          onPatch={() => {
            setIsPatchMode(true);
          }}
          onDelete={handleDeleteComment}
        />
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

export default function CommentList({ data, articleId, onRefetch }) {
  return (
    <div className={styles.commentList}>
      {data.map((comment) => {
        return (
          <Comment
            key={comment.id}
            comment={comment}
            articleId={articleId}
            onRefetch={onRefetch}
          />
        );
      })}
    </div>
  );
}
