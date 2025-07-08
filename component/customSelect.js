import style from "@/styles/component.module.css";
export default function CustomSelect({ onDelete, onFetch }) {
  return (
    <>
      <div
        onClick={(e) => e.stopPropagation()}
        className={style.CustomSelectContainer}
      >
        <div className={style.CustomSelectBox}>
          <p onClick={onFetch}>수정하기</p>
        </div>
        <div>
          <p onClick={onDelete}>삭제하기</p>
        </div>
      </div>
    </>
  );
}
