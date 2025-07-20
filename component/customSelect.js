import style from "@/styles/component.module.css";
import DeleteModal from "./deleteModal";
import { useState } from "react";

export default function CustomSelect({ onDelete, onFetch }) {
  const [modal, setmodal] = useState(false);
  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={style.CustomSelectContainer}
    >
      <div className={style.CustomSelectBox}>
        <p onClick={onFetch}>수정하기</p>
      </div>
      <div>
        <p onClick={() => setmodal((prev) => !prev)}>삭제하기</p>
      </div>
      {modal && (
        <DeleteModal
          onClose={() => setmodal(false)}
          onDelete={onDelete}
        ></DeleteModal>
      )}
    </div>
  );
}
