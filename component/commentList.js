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
import usePatchArticle from "@/Util/usePatchArticle";

export default function CommentList() {
  const { article, setArticle } = useGetBoardById();
  const [modal, setmodal] = useState(false);
  const [editMode, setEditMode] = useState(true);
  const router = useRouter();
  const { articlePatch } = usePatchArticle();
  const [title, setTitle] = useState(article?.title || "");
  const [content, setContent] = useState(article?.content || "");

  const handlePatchTitleContent = async () => {
    const res = await articlePatch(article.id, title, content);
    setArticle(res);
    setEditMode(true);
    setmodal(false);
  };

  const handleClick = () => {
    setmodal(true);

    if (modal == true) setmodal(false);
  };

  const handleDelete = async () => {
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
              <input value={title} onChange={(e) => setTitle(e.target.value)} />
              <button onClick={handlePatchTitleContent}>확인</button>
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
          <p className={style.CommentListInfoCreatedAt}>
            {article ? article.createdAt.slice(0, 10) : "생성날짜 로딩중.."}
          </p>
        </div>
        <div className={style.line}></div>
        <div className={style.commentListTitleIconBox}>
          <button className={style.commentListLikeButton}>
            <AiFillHeart size={24} color="gray" />
            <p>{article ? article.like : "0"}</p>
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
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
              <button onClick={handlePatchTitleContent}>확인</button>
            </div>
          )}
        </p>
      </div>
    </div>
  );
}
