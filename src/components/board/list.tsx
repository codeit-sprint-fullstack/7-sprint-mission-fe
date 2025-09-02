import style from "./list.module.css";

interface ListProps {
  title: string;
  user: any;
  img: string;
  heart: number;
  time: string;
}

function List({ title, user, img, heart, time }: ListProps) {
  return (
    <div className={style.Container}>
      <div className={style.Content}>
        <p>list글내용{title}</p>
        <img className={style.ContentImg} src={img} alt="이미지"></img>
      </div>
      <div className={style.ListInfo}>
        <div className={style.UserInfo}>
          <img src={user.img} alt="유저이미지"></img>
          <p>유저이름{user.nickname || "빈값"}</p>
          <p>날짜{time}</p>
        </div>
        <div>
          <img></img>
          <p>하트수{heart}</p>
        </div>
      </div>
    </div>
  );
}

export default List;
