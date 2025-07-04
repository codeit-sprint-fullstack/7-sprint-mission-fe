import style from "@/styles/component.module.css";
import ic_medal from "@/public/ic_medal.png";
import Image from "next/image";
import useUser from "@/Util/useUser";
import { useEffect } from "react";
import panda from "@/public/icon_panda.svg";

export default function BoardCard({}) {
  const { users } = useUser();

  useEffect(() => {
    console.log("유저리스트불러와지나?", users);
  }, [users]);
  return (
    <>
      {users.slice(0, 3).map((users) => (
        <div className={style.boardCard}>
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
              {users.Comment?.[0]?.content || "아무것도안적엇지롱"}
            </p>
            <Image
              className={style.boardCommentImg}
              src={panda}
              style={{ width: 50, height: 50 }}
              alt="대충이미지"
            />
          </div>
          <div className={style.boardItemBox}>
            {/* 이름 좋아요 날짜  */}
            <p className={style.boardItemText}>{users?.name}</p>
            <p className={style.boardItemText}>{users?.like || "9999"}</p>
            <p className={style.boardItemText}>{users?.date || "2025-07-02"}</p>
          </div>
        </div>
      ))}
    </>
  );
}
