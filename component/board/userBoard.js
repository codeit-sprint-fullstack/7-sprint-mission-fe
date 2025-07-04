import { useEffect, useState } from "react";
import BoardItem from "./boardItem";
import { fetchCommentList } from "@/pages/api/product";

export default function UserBoard() {
  const [comment, setComment] = useState([]);

  useEffect(() => {
    fetchCommentList().then((data) => {
      console.log("받아온 데이터:", data);
      setComment(data);
    });
  }, []);
  return (
    <>
      <div>
        <div>
          <div>
            <p>게시글</p>
          </div>
          <div>
            <button>글쓰기</button>
          </div>
        </div>
        <div>
          <div>
            <input></input>
          </div>
          <div>
            <select></select>
          </div>
        </div>
        <div>
          {/* 여기서 map활용해서 보더아이템이 쫘르륵나오도록 */}
          {comment.map((item) => (
            <BoardItem key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
