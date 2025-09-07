import style from "./write.module.css";
import plus from "../../assets/icons/ic_plus.svg";
import React, { useState } from "react";
function Write() {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImageSrc(URL.createObjectURL(file));
    }
  };
  const handleRemove = () => {
    if (imageSrc) {
      URL.revokeObjectURL(imageSrc);
    }
    setImageSrc(null);
  };

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
        {!imageSrc && (
          <div className={style.upload}>
            <label className={style.PlusLabel} htmlFor="real-file">
              <img className={style.PlusIcon} src={plus} alt="+"></img>
              <span>이미지넣기</span>
            </label>
            <input
              id="real-file"
              className={style.fileUpload}
              type="file"
              onChange={handleInput}
            ></input>
          </div>
        )}
        {imageSrc && (
          <div className={style.uploadImg}>
            <img className={style.uploadContent} src={imageSrc} alt="사진" />
            <span className={style.uploadDeleted} onClick={handleRemove}>
              X
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default Write;
