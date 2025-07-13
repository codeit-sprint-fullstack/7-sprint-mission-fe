import style from "@/styles/component.module.css";
import ic_medal from "@/public/ic_medal.png";
import Image from "next/image";
import panda from "@/public/icon_panda.svg";
import useArticleList from "@/Util/useArticlesList";
import { AiOutlineHeart } from "react-icons/ai";

export default function BoardCard({}) {
  const { articleList } = useArticleList();
  const top3ByLike = articleList.slice().sort((a, b) => b.like - a.like);

  return (
    <>
      {top3ByLike.slice(0, 3).map((users) => (
        <div key={users.id} className={style.boardCard}>
          <div className={style.boardImgtag}>
            {/* 베스트이미지 */}
            <Image
              src={ic_medal}
              style={{ width: 30, height: 30 }}
              alt="메달이미지"
            />
            <p>Best</p>
          </div>
          <div className={style.boardCommentBox}>
            {/* 글내용 */}
            <p className={style.boardCommentText}>
              {users.title || "아무것도안적엇지롱"}
            </p>
            <Image
              className={style.boardCommentImg}
              src={panda}
              width={50}
              height={50}
              alt="대충이미지"
            />
          </div>
          <div className={style.boardItemBox}>
            {/* 이름 좋아요 날짜  */}
            <div className={style.boardItemBoxFlex}>
              <p className={style.boardItemText}>
                {users.user?.name || "익명"}
              </p>
              <div className={style.boardItemHeartBox}>
                <AiOutlineHeart size={20} color="gray" />
                <p className={style.boardItemText}>{users?.like}</p>
              </div>
            </div>
            <div>
              <p className={style.boardItemText}>
                {users?.createdAt.slice(0, 10)}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
