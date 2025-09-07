import style from "./comment.module.css";
import optionImg from "../../assets/icons/ic_kebab.svg";
import UserInfo from "../../assets/ui/ic_profile.svg";
import Kebab from "./kebab";

function Comment() {
  return (
    <div className={style.Cotainer}>
      <div className={style.Box}>
        <p>내용</p>
        <Kebab />
      </div>
      <div className={style.UserBox}>
        <img src={UserInfo}></img>
        <div>
          <p>유저이름</p>
          <p>시간</p>
        </div>
      </div>
    </div>
  );
}

export default Comment;
