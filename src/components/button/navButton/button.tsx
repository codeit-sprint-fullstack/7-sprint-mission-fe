import type { JSX } from "react";
import style from "./button.module.css";

function Button(): JSX.Element {
  return (
    <div className={style.Container}>
      <p className={style.Text}>로그인</p>
    </div>
  );
}

export default Button;
