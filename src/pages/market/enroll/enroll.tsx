import style from "./enroll.module.css";
import plus from "../../../assets/icons/ic_plus.svg";
import { useUpload } from "../../../hooks/useUpload/useUpload";
import { useState, useEffect } from "react";
import Tag from "../../../components/board/enroll/tag";
function Enroll() {
  const { imageSrc, handleInput } = useUpload();
  const [images, setImages] = useState<string[]>([]);
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (imageSrc) {
      setImages((prev) => [...prev, imageSrc]);
    }
  }, [imageSrc]);

  const handleRemove = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className={style.Container}>
      <div className={style.Title}>
        <p>상품 등록하기</p>
        <button className={style.TitleButton}>등록</button>
      </div>
      <div>
        <p>상품이미지</p>
        <div className={style.imageBox}>
          {images.map((src, idx) => (
            <div key={idx} className={style.uploadImg}>
              <img
                className={style.uploadContent}
                src={src}
                alt={`사진${idx}`}
              />
              <span
                className={style.uploadDeleted}
                onClick={() => handleRemove(idx)}
              >
                X
              </span>
            </div>
          ))}
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
        </div>
      </div>
      <div className={`${style.InputBox}`}>
        <label>상품명</label>
        <input className={`${style.InputContent}`}></input>
      </div>
      <div className={`${style.InputBox}`}>
        <label>상품소개</label>
        <input className={`${style.InputContent} ${style.Introduce}`}></input>
      </div>
      <div className={`${style.InputBox}`}>
        <label>판매가격</label>
        <input className={`${style.InputContent}`}></input>
      </div>
      <div className={`${style.InputBox}`}>
        <label>태그</label>
        <input
          className={`${style.InputContent}`}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter" && inputValue.trim()) {
              setTags((prev) => [...prev, inputValue.trim()]);
              setInputValue("");
            }
          }}
        ></input>
      </div>
      <div className={style.TagBox}>
        {tags.map((tag, idx) => (
          <Tag
            key={idx}
            value={tag}
            onDelete={() => setTags((prev) => prev.filter((_, i) => i !== idx))}
          />
        ))}
      </div>
    </div>
  );
}

export default Enroll;
