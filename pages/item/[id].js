import { useRouter } from "next/router";
import useProduct from "@/Util/useProduct";
import DetailCommentList from "@/component/detailCommentList";
import { IoReturnDownBack } from "react-icons/io5";
import Image from "next/image";
import emptyComment from "@/public/Img_reply_empty.png";
import style from "@/styles/pages.module.css";
import { useState } from "react";
import { postComment } from "@/pages/api/product"; // 댓글 프로덕트 바꿔야함
import { FiMoreVertical } from "react-icons/fi";
import CustomSelect from "@/component/customSelect";
import useProductComment from "@/Util/useProductComment";
import defaultPanda from "@/public/defaultImage.png";
import { getProductById } from "@/pages/api/productItem";

export default function Item() {
  const router = useRouter();
  const { id } = router.query;
  const [modal, setmodal] = useState(false);
  const { product, loading } = useProduct(id);
  const [comment, setComment] = useState("");
  const { commentListProduct, refetchComments } = useProductComment(id);

  const testUser = { id: 4 }; // 임시 유저

  const handleComment = async () => {
    if (!comment) {
      alert("댓글에 내용을 입력하세요.");
      return;
    }

    await postComment({
      content: comment,
      productId: id,
      userId: testUser.id,
    });

    setComment("");
    await refetchComments();
  };

  const handleClick = () => {
    setmodal((prev) => !prev);

    if (modal == true) setmodal(false);
  };
  const handleDelete = async () => {
    // await deleteArticle(article.id);
    router.push(`/`);
  };

  const handleFetch = async () => {
    setEditMode(false);
  };

  if (loading) return <div>로딩 중...</div>;
  if (!product) return <div>데이터를 찾을 수 없습니다.</div>;

  return (
    <div>
      <div className={style.ItemImgBox}>
        <div>
          <Image
            alt=""
            width={360}
            height={400}
            src={product.images?.[0] || emptyComment}
            unoptimized
          ></Image>
        </div>
        <div className={style.ItemInfoBox}>
          <div>
            <div className={style.ItemTitle}>
              <div>
                <p>{product.name}</p>
                <p>{product.price}원</p>
              </div>
              <FiMoreVertical onClick={handleClick} size={20} />
              {modal ? (
                <CustomSelect
                  onDelete={handleDelete}
                  onFetch={handleFetch}
                ></CustomSelect>
              ) : null}
            </div>
            {/* <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>가격: {product.price}</p> */}
          </div>
          <div>
            <p>상품내용</p>
            <p>{product.description}</p>
          </div>
          <div>
            <p>상품 태그</p>
            <div className={style.tagsBox}>
              {console.log("태그값왜안넘오올까요", product)}
              {product.tags.map((item) => (
                <div className={style.itemTagsBox}>
                  <p>{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className={style.itemsUserBox}>
            <Image
              className={style.itemsUserImage}
              src={defaultPanda}
              height={50}
              width={50}
            />
            <div>
              <p>{product.ownerNickname}</p>
              <p>{product.createdAt.slice(0, 10)}</p>
            </div>
            <div className={style.itemsUserHeartButtondiv}>
              <button className={style.itemsUserHeartButton}>하트버튼</button>
            </div>
          </div>
        </div>
      </div>

      {/* 댓글 작성 UI */}
      <div>
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

      {/* 댓글 리스트 */}
      {console.log(commentListProduct)}
      <div className={style.detailCommentList}>
        {commentListProduct.length > 0 ? (
          commentListProduct.map((comment) => (
            <DetailCommentList
              key={comment.id}
              content={comment.content}
              id={comment.id}
              createdAt={comment.createdAt}
              onDeleteSuccess={refetchComments}
              // user={comment.user.name}
            />
          ))
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
