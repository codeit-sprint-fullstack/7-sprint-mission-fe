import { AiOutlineCheck } from "react-icons/ai";
import style from "@/styles/component.module.css";

export default function DeleteModal({ onClose, onDelete }) {
  return (
    <div className={style.DeleteModalBox}>
      <AiOutlineCheck
        className={style.deleteModalIcon}
        color="white"
        size={20}
      />
      <p>정말로 상품을 삭제하시겠어요?</p>
      <div className={style.DeleteModalButtonBox}>
        <button className={style.DeleteModalButton1} onClick={onClose}>
          취소
        </button>
        <button className={style.DeleteModalButton2} onClick={onDelete}>
          네
        </button>
      </div>
    </div>
  );
}
