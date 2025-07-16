import style from "@/styles/pages.module.css";
import usePostBoard from "@/Util/useArticle";
import { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/Auth/authprovider";
export default function Write() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { submitPost } = usePostBoard();
  const router = useRouter();
  const { user } = useAuth();
  //여기서 유저정보받아오고 유저정보에서 글목록까지연관시켜야됨

  const handleSubmit = async () => {
    if (!user) {
      alert("로그인 후 이용해주세요.");
      router.push("/login");
      return;
    }
    const userId = user.id || user._id;
    console.log("이거왜 언디파인드야", userId);
    if (!title && !content) {
      alert("제목과 내용을 입력하시오");
      return;
    }
    try {
      const res = await submitPost(title, content, userId);
      if (!res) {
        console.log("asdasdasdsadsad", res);
        return;
      }
      setTitle("");
      setContent("");
      router.push(`/detail/${res.id}`);
    } catch (error) {
      console.error("게시글 작성 중 에러:", error);
    }
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
