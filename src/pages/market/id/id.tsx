import Kebab from "../../../components/board/kebab";
import defaultImage from "../../../assets/ui/img_default.png";
import style from "./id.module.css";
import defaultUser from "../../../assets/ui/ic_profile.svg";
import Comment from "../../../components/board/comment";

function MarketById() {
  return (
    <div className={style.Container}>
      <div className={style.Box}>
        <img src={defaultImage} alt="이미지"></img>
        <div className={style.Cotent}>
          <div className={style.Title}>
            <p>title</p>
            <Kebab />
          </div>
          <p>100000원</p>
          <div className={style.line} />
          <div>
            <p>상품소개</p>
            <p>내용들...</p>
          </div>
          <div>
            <p>상품태그</p>
            <p>태그들...</p>
          </div>
          <div className={style.UserInfo}>
            <div className={style.UserBox}>
              <img src={defaultUser}></img>
              <div>
                <p>유저이름</p>
                <p>기한</p>
              </div>
            </div>
            <div className={style.LikeBox}>
              <button className={style.LikeButton}>좋아요버튼</button>
            </div>
          </div>
        </div>
      </div>
      <div className={style.ask}>
        <label>문의하기</label>
        <input className={style.askInput} />
        <button className={style.askButton}>등록</button>
      </div>
      <div>
        <Comment />
      </div>
    </div>
  );
}

export default MarketById;
