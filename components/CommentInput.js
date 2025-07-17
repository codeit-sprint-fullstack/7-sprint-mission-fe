import { useEffect, useState } from "react";
import CustomButtonSquare from "./CustomButtonSquare";
import axios from "axios";
import styles from "./CommentInput.module.css";
import validInput from "@/utils/validInput";
import { useUser } from "@/lib/UserContext";

export default function CommentInput({ data, onNewComment }) {
  const [value, setValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const userId = useUser().userId;

  const handlePostComment = async () => {
    if (!userId) {
      alert("로그인 후 이용 가능합니다.");
      return;
    }

    if (!isValid) {
      alert("댓글을 작성해 주세요.");
      return;
    }

    const res = await axios.post(`http://localhost:5000/aComment/${data.id}`, {
      data: { userId, content: value },
    });
    onNewComment(res.data);
    return res.data;
  };

  useEffect(() => {
    if (validInput(value)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [value]);

  return (
    <div className={styles.postComment}>
      <div className={styles.header}>댓글 달기</div>
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
          text={`등록`}
          onClick={handlePostComment}
          valid={isValid}
        />
      </div>
    </div>
  );
}
