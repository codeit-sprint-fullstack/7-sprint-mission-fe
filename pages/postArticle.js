import CustomButtonSquare from "@/components/CustomButtonSquare";
import { useUser } from "@/lib/UserContext";
import styles from "@/styles/postArticle.module.css";
import validInput from "@/utils/validInput";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// post인지, patch인지 구분을 할 수 있어야 하는데..?

export default function postArticle() {
  const { userId } = useUser();

  const router = useRouter();
  const mode = router.query.mode;

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [validPost, setValidPost] = useState(false);

  function rightInput(title, content) {
    if (title && content) {
      return true;
    }

    return false;
  }

  async function postNewArticle() {
    if (rightInput(title, content)) {
      try {
        const res = await axios.post("http://localhost:5000/article", {
          data: {
            title,
            content,
            userId,
          },
        });
        console.log(`포스트 성공`);
        return res.data;
      } catch (e) {
        console.error(e);
      }
    } else {
      alert("제목 및 내용을 입력하세요");
      return;
    }
  }

  useEffect(() => {
    if (validInput(title) && validInput(content)) {
      setValidPost(true);
    } else {
      setValidPost(false);
    }
  }, [title, content]);

  return (
    <div className={styles.postArticle}>
      <div>
        <div>
          <div>게시글 쓰기</div>
          <CustomButtonSquare
            text="등록"
            onClick={postNewArticle}
            valid={validPost}
          />
        </div>
        <div>
          <div>*제목</div>
          <input
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="제목을 입력해 주세요"
          />
        </div>
        <div>
          <div>*내용</div>
          <textarea
            value={content}
            onChange={(e) => {
              setContent(e.target.value);
            }}
            placeholder="내용을 입력해 주세요"
          />
        </div>
      </div>
    </div>
  );
}
