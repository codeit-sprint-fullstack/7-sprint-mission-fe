import style from "@/styles/pages.module.css";
import usePostBoard from "@/Util/useArticle";
import { useState } from "react";
import { useRouter } from "next/router";
export default function Write() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { submitPost } = usePostBoard();
  const router = useRouter();

  const handleSubmit = async () => {
    const res = await submitPost(title, content);
    setTitle("");
    setContent("");
    console.log(res.id);
    router.push(`/detail/${res.id}`);
  };
  return (
    <div className={style.wirte}>
      <div className={style.wirteContainer}>
        <div className={style.wirteTitle}>
          <p className={style.wirteTitleFont}>게시글 쓰기</p>
          <button className={style.writeTitleButton} onClick={handleSubmit}>
            등록하기
          </button>
        </div>
        <div className={style.wirteHeadline}>
          <p className={style.wirteContentFont}>제목</p>
          <input
            className={style.writeInput}
            placeholder="제목을 입력해주세요."
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div className={style.wirteContent}>
          <p className={style.wirteContentFont}>내용</p>
          <textarea
            className={style.writeInputArea}
            placeholder="내용을 입력해주세요."
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
      </div>
    </div>
  );
}
