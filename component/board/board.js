import BoardItem from "./boardItem";
import style from "@/styles/component.module.css";
export default function Board() {
  return (
    <>
      <div>
        <div>
          <p>베스트 게시글 </p>
        </div>
        <div className={style.boardBox}>
          {/* 베스트게시글 아이템 3개 */}
          <BoardItem />
          <BoardItem />
          <BoardItem />
        </div>
      </div>
    </>
  );
}
