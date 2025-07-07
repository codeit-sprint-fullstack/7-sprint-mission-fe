import CommentList from "@/component/commentList";
import style from "@/styles/pages.module.css";

export default function Detail() {
  return (
    <>
      <div className={style.detailContainer}>
        <div>
          <CommentList />
        </div>
        <div>
          {/* comment */}
          <div className={style.detailCommentBox}>
            <p className={style.detailCommentFont}>댓글달기</p>
            <textarea
              className={style.detailCommentInput}
              placeholder="댓글을 입력해주세요."
            ></textarea>
            <button className={style.detailCommentButton}>등록</button>
          </div>
        </div>
        <div>{/* 댓글리스트 */}</div>
        <div>
          <button>목록으로 돌아가기</button>
        </div>
      </div>
    </>
  );
}
