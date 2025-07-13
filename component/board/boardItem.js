import style from "@/styles/component.module.css";
import panda from "@/public/icon_panda.svg";
import Image from "next/image";

const defaultUserInfo = {
  name: "총명한판다",
  like: 9999,
  date: "2024.04.16",
};

export default function BoardItem({
  Img = "",
  item = {},
  userInfo = defaultUserInfo,
}) {
  const { content, createdAt, like } = item;
  const user = userInfo || defaultUserInfo;

  return (
    <div className={style.BoardItemContainer}>
      <div className={style.boardItemBetween}>
        <div>
          <p>{content}</p>
        </div>
        <div>
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
