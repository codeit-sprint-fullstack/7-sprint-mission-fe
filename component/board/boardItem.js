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
  const { title, createdAt, like } = item;
  const user = userInfo || defaultUserInfo;

  return (
    <div className={style.BoardItemContainer}>
      <div className={style.boardItemBetween}>
        <div className={style.boardItemTitleArea}>
          <p>{title}</p>
        </div>
        <div className={style.boardItemIamgeBox}>
          <Image
            className={style.boardCommentImg}
            src={panda}
            width={50}
            height={50}
            alt="유저 이미지"
          />
        </div>
      </div>
      <div className={style.boardItemBetween}>
        <div className={style.boardItemBetweenBox}>
          <Image
            alt=""
            className={style.boardItemUserInfoImg}
            src={defaultImage}
          />
          <p>{user.name}</p>
          <p>{new Date(createdAt).toLocaleDateString("ko-KR")}</p>
        </div>
        <div>
          <p>❤️ {like ?? 9999}</p>
        </div>
      </div>
    </div>
  );
}
