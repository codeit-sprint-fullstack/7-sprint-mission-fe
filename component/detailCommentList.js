import { deleteComment } from "@/pages/api/product";
import panda from "@/public/defaultImage.png";
import style from "@/styles/component.module.css";
import usePatch from "@/Util/usePatch";
import Image from "next/image";
import { useState } from "react";
import { FiMoreVertical } from "react-icons/fi";
import CustomSelect from "./customSelect";

export default function DetailCommentList({
  content,
  id,
  createdAt,
  onDeleteSuccess,
  user,
}) {
  const [modal, setmodal] = useState(false);
  const [fetchInput, setFetchInput] = useState(false);
  const { submitPatch } = usePatch();
  const [inputValue, setInputValue] = useState(content);
  const now = Date.now();
  const createdAtTime = new Date(createdAt).getTime();
  const handleClick = () => {
    setmodal(true);

    if (modal == true) setmodal(false);
  };

  const timeElapsed = (now - createdAtTime) / 1000 / 60 / 60;

  const handleDelete = async () => {
    console.log(id);
    await deleteComment(id);
    if (onDeleteSuccess) {
      onDeleteSuccess();
    }
  };
  const handleFetch = async () => {
    setmodal(false);
    setFetchInput(true);
  };

  const handlesubmitPatch = async () => {
    const res = await submitPatch(id, inputValue);
    setFetchInput(false);
  };

  return (
    <div className={style.DetailCommentListContainer}>
      <div>
        {fetchInput ? (
          <div>
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            ></input>
            <button onClick={handlesubmitPatch}>확인</button>
          </div>
        ) : (
          inputValue
        )}
      </div>
      <div className={style.DetailCommentListBox}>
        <div>
          <Image className={style.DetailCommentListImage} src={panda} />
        </div>
        <div>
          <div>{user || "익명"}</div>
          <div>{Math.floor(timeElapsed)}시간 전</div>
        </div>
      </div>
      <div
        onClick={(e) => e.stopPropagation()}
        className={style.DetailCommentListIcon}
      >
        <FiMoreVertical onClick={handleClick} size={20} />
        {modal ? (
          <CustomSelect
            onDelete={handleDelete}
            onFetch={handleFetch}
          ></CustomSelect>
        ) : null}
      </div>
    </div>
  );
}
