import CommentList from "@/component/commentList";
import style from "@/styles/pages.module.css";
import { useEffect, useState } from "react";
import { postComment } from "@/pages/api/product";
import { useRouter } from "next/router";
import useCommentList from "@/Util/useCommentList";
import DetailCommentList from "@/component/detailCommentList";
import emptyComment from "@/public/Img_reply_empty.png";
import Image from "next/image";
import { IoReturnDownBack } from "react-icons/io5";

export default function Detail() {
  const [comment, setComment] = useState("");
  const router = useRouter();
  const { id } = router.query;
  const testUser = {
    id: 4,
  };
  const { commentList, refetchComments } = useCommentList(id);

  const handleComment = async () => {
    if (!comment) {
      alert("댓글에 내용을입력하시오");
      return;
    }
    const res = await postComment({
      content: comment,
      articleId: id,
      userId: testUser.id,
    });
    setComment("");
    await refetchComments();
  };

  return (
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
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          ></textarea>
          <button onClick={handleComment} className={style.detailCommentButton}>
            등록
          </button>
        </div>
      </div>
      <div className={style.detailCommentList}>
        {/* 댓글리스트 */}
        {commentList.length > 0 ? (
          commentList.map((comment) => {
            return (
              <DetailCommentList
                key={comment.id}
                content={comment.content}
                id={comment.id}
                createdAt={comment.createdAt}
                onDeleteSuccess={refetchComments}
                user={comment.user.name}
              ></DetailCommentList>
            );
          })
        ) : (
          <div className={style.emptyCommentBox}>
            <Image
              width={100}
              height={100}
              src={emptyComment}
              alt={"빈 코멘트"}
            />
            <div className={style.emptyCommentTextBox}>
              <p>아직 댓글이 없어요,</p>
              <p>지금 댓글을 달아보세요!</p>
            </div>
          </div>
        )}
      </div>
      <div className={style.detailButtonBox}>
        <button className={style.detailButton} onClick={() => router.push("/")}>
          목록으로 돌아가기
          <IoReturnDownBack size={30} />
        </button>
      </div>
    </div>
  );
}
