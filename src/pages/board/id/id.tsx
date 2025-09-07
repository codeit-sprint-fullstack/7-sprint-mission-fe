import CommentList from "../../../components/board/comment";
import style from "./id.module.css";
import icon from "../../../assets/icons/ic_kebab.svg";
import UserImg from "../../../assets/ui/ic_profile.svg";
import heart from "../../../assets/icons/ic_heart.svg";
function BoardId() {
  return (
    <div>
      <div className={style.Box}>
        <div className={style.Title}>
          <p>title</p>
          <img src={icon} alt="아이콘"></img>
        </div>
        <div className={style.UserInfo}>
          <img src={UserImg} alt="유저사진"></img>
          <p>유저이름</p>
          <p>날짜</p>
          <div></div>
          <button className={style.LikeButton}>
            <img src={heart}></img>좋아요수
          </button>
        </div>
        <div>
          <p>글내용</p>
        </div>
        <div className={style.CommentBox}>
          <p>댓글달기</p>
          <input className={style.CommentInput}></input>
          <button className={style.CommentButton}>등록</button>
        </div>
        <CommentList />
      </div>
    </div>
  );
}
export default BoardId;
