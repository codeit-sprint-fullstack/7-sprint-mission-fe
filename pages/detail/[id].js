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
import { useAuth } from "@/Auth/authprovider";
import { realPostComment } from "@/pages/api/articles";

export default function Detail() {
  const [comment, setComment] = useState("");
  const router = useRouter();
  const { id } = router.query;

  // if (id) {
  //   return console.log("id값존재하나요??????", id);
  // }
  const { user } = useAuth();
  const { commentList, refetchComments } = useCommentList(id);
  // 지금 내가해야할거 클릭했을떄 그 list가보이도록
  const handleComment = async () => {
    if (!id) {
      alert("게시글 ID를 불러오는 중입니다. 잠시만 기다려주세요.");
      return;
    }
    if (!comment) {
      alert("댓글에 내용을입력하시오");
      return;
    }
    console.log("user정보옴?", user);
    const res = await realPostComment(comment, id); // 보내지는거까지확인
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
                user={comment.writer.nickname}
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
