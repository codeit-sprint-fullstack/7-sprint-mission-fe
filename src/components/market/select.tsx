import { useState } from "react";
import downIcon from "../../assets/icons/ic_arrow_down.svg";

import style from "./select.module.css";

function Select() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("최신순");

  const handleSelect = (option: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSelected(option);
    setOpen(false);
  };
  const imgIcon = open ? `${style.downUp}` : undefined;
  return (
    <div className={style.Container} onClick={() => setOpen((prev) => !prev)}>
      <p>{selected}</p>
      <img src={downIcon} className={imgIcon} />
      {open && (
        <div className={style.Options}>
          <div onClick={(e) => handleSelect("최신순", e)}>
            <p>최신순</p>
          </div>
          <div onClick={(e) => handleSelect("좋아요순", e)}>
            <p>좋아요순</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Select;
