import style from "@/styles/component.module.css";
const userInfoconfig = {
  name: "총명한판다",
  like: 9999,
  date: "2024.04.16",
};
export default function BoardItem({
  Img = "",
  item = "",
  userInfo = userInfoconfig,
}) {
  return (
    <>
      <div>
        <div>{/* 베스트이미지 */}</div>
        <div>
          {/* 글내용 */}
          <p>{item.content}</p>
        </div>
        <div className={style.boardItemBox}>
          {/* 이름 좋아요 날짜  */}
          <p>{userInfo.name}</p>
          <p>{userInfo.like}</p>
          <p>{userInfo.date}</p>
        </div>
      </div>
    </>
  );
}
