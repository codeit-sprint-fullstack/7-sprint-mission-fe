import style from "@/styles/pages.module.css";

export default function Write() {
  return (
    <>
      <div className={style.wirteContainer}>
        <div className={style.wirteTitle}>
          <p>게시글 쓰기</p>
          <button>등록하기</button>
        </div>
        <div>
          <p>제목</p>
          <input></input>
        </div>
        <div>
          <p>내용</p>
          <textarea></textarea>
        </div>
      </div>
    </>
  );
}
