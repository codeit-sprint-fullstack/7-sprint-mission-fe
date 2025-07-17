import { useState } from "react";
import CustomButtonSquare from "./CustomButtonSquare";
import axios from "axios";
import styles from "./CommentInput.module.css";

export default function CommentInput() {
  const [value, setValue] = useState("");
  const userId = "";

  const handlePostComment = async () => {
    if (!userId) {
      alert("로그인 후 이용 가능합니다.");
      return;
    }

    if (!value) {
      alert(`댓글을 작성 해 주세요.`);
      return;
    }

    const res = await axios.post(`http://localhost:5000/article/${id}`, {
      data: { userId, articleId, content: value },
    });
    return res.data;
  };

  return (
    <div>
      <div>댓글 달기</div>
      <textarea
        className={styles.input}
        placeholder="댓글을 입력해 주세요"
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <CustomButtonSquare
        text={`등록`}
        onClick={handlePostComment}
        valid={false}
      />
    </div>
  );
}
