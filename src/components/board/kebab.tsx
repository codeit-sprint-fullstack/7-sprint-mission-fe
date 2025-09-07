import style from "./kebab.module.css";
import kebab from "../../assets/icons/ic_kebab.svg";
import { useState } from "react";
function Kebab() {
  const [open, setOpen] = useState(false);
  return (
    <div className={style.kebab}>
      <img
        src={kebab}
        alt="케밥 아이콘"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className={`${style.Container} ${style.point}`}>
          <div className={style.Line}>
            <span>수정하기</span>
          </div>
          <div className={style.point}>
            <span>삭제하기</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Kebab;
