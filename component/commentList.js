import useGetBoardById from "@/Util/useBoardById";
import style from "@/styles/component.module.css";
import { FiMoreVertical } from "react-icons/fi";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Image from "next/image";
import defaultImage from "@/public/defaultImage.png";
export default function CommentList() {
  const { article } = useGetBoardById();

  return (
    <div>
      <div className={style.commentListTitle}>
        <p className={style.commentListTitleFont}>
          {article ? article.title : "제목 로딩중 .."}
        </p>
        <FiMoreVertical size={20} />
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
          <AiFillHeart size={28} color="gray" />
        </div>
      </div>
      <div>
        <p className={style.CommentListContent}>{article ? article.content : "내용 로딩중 ..."}</p>
      </div>
    </div>
  );
}
