import style from "./write.module.css";
import plus from "../../assets/icons/ic_plus.svg";
function Write() {
  return (
    <div className={style.Container}>
      <div className={style.title}>
        <p>게시글 쓰기</p>
        <button>등록</button>
      </div>
      <div>
        <p>제목</p>
        <input className={style.InputBox}></input>
      </div>
      <div>
        <p>내용</p>
        <textarea className={style.InputBox}></textarea>
      </div>
      <div>
        <p>이미지</p>
        <div className={style.upload}>
          <label className={style.PlusLabel} htmlFor="real-file">
            <img className={style.PlusIcon} src={plus} alt="+"></img>
            <span>이미지넣기</span>
          </label>
          <input
            id="real-file"
            className={style.fileUpload}
            type="file"
          ></input>
        </div>
      </div>
    </div>
  );
}

export default Write;
