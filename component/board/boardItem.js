import style from "@/styles/component.module.css";
import panda from "@/public/icon_panda.svg";
import Image from "next/image";
import defaultImage from "@/public/defaultImage.png";

const defaultUserInfo = {
  name: "총명한판다",
  like: 9999,
  date: "2024.04.16",
};

export default function BoardItem({ userInfo, item = {} }) {
  const { title, createdAt, likeCount, writer, image } = item;
  const user = userInfo || defaultUserInfo;
  const nickName = writer.nickname;
  return (
    <div className={style.BoardItemContainer}>
      <div className={style.boardItemBetween}>
        <div className={style.boardItemTitleArea}>
          <p>{title}</p>
        </div>
        <div className={style.boardItemIamgeBox}>
          <Image
            className={style.boardCommentImg}
            src={image || panda}
            width={50}
            height={50}
            alt="유저 이미지"
            unoptimized
          />
        </div>
      </div>
      <div className={style.boardItemBetween}>
        <div className={style.boardItemBetweenBox}>
          <Image
            alt=""
            className={style.boardItemUserInfoImg}
            src={defaultImage}
            width={50}
            height={50}
            unoptimized
          />
          <p>{nickName}</p>
          <p>{new Date(createdAt).toLocaleDateString("ko-KR")}</p>
        </div>
        <div>
          <p>❤️ {likeCount ?? 9999}</p>
        </div>
      </div>
    </div>
  );
}
