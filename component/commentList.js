import useGetBoardById from "@/Util/useBoardById";
import style from "@/styles/component.module.css";
import { FiMoreVertical } from "react-icons/fi";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Image from "next/image";
import defaultImage from "@/public/defaultImage.png";
import { useEffect, useState } from "react";
import CustomSelect from "@/component/customSelect";
import { deleteArticle } from "@/pages/api/product";
import { useRouter } from "next/router";

export default function CommentList() {
  const { article } = useGetBoardById();
  const [modal, setmodal] = useState(false);
  const [editMode, setEditMode] = useState(true);
  const router = useRouter();

  const handleClick = () => {
    setmodal(true);

    if (modal == true) setmodal(false);
  };

  const handleDelete = async () => {
    console.log("삭제하는 콘솔확인", article.id);
    await deleteArticle(article.id);
    router.push(`/`);
  };

  const handleFetch = async () => {
    setEditMode(false);
  };

  return (
    <div>
      <div className={style.commentListTitle}>
        <p className={style.commentListTitleFont}>
          {editMode ? (
            article ? (
              article.title
            ) : (
              "제목 로딩중 .."
            )
          ) : (
            <div>
              <input></input>
              <button>확인</button>
            </div>
          )}
        </p>
        <div onClick={(e) => e.stopPropagation()}>
          <FiMoreVertical onClick={handleClick} size={20} />
          {modal ? (
            <CustomSelect
              onDelete={handleDelete}
              onFetch={handleFetch}
            ></CustomSelect>
          ) : null}
        </div>
      </div>
      <div className={style.CommentListBox}>
        <div className={style.CommentListInfo}>
          <Image className={style.CommentListInfoImage} src={defaultImage} />
          <p>{article ? article.id.slice(0, 5) : "ID 로딩중 ..."}</p>
          <p>
            {article ? article.createdAt.slice(0, 10) : "생성날짜 로딩중.."}
          </p>
        </div>
        <div className={style.line}></div>
        <div className={style.commentListTitleIconBox}>
          <button>
            <AiFillHeart size={28} color="gray" />
          </button>
        </div>
      </div>
      <div>
        <p className={style.CommentListContent}>
          {editMode ? (
            article ? (
              article.content
            ) : (
              "내용 로딩중 ..."
            )
          ) : (
            <div>
              <textarea></textarea>
              <button>확인</button>
            </div>
          )}
        </p>
      </div>
    </div>
  );
}
