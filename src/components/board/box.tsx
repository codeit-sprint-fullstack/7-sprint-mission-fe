import style from "./box.module.css";

interface BoxProps {
  title: string;
  img: string;
  user: any;
  time: string;
  heart: number;
}

function Box({ title, img, user, time, heart }: BoxProps) {
  return (
    <div className={style.Container}>
      <div>
        <p>{title}</p>
        <img src={img} alt="임시사진"></img>
      </div>
      <div>
        <p>{user.nickname || "유저"}</p>
        <div>
          <img></img>
          <p>{heart || 42}</p>
        </div>
        <p>{time || "2022-02-02"}</p>
      </div>
    </div>
  );
}

export default Box;
