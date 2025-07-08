import { useEffect, useState } from "react";
import BoardItem from "./boardItem";
import useComment from "@/Util/useComment";
import style from "@/styles/component.module.css";
import useUser from "@/Util/useUser";
import { useRouter } from "next/router";
import useArticleList from "@/Util/useArticlesList";

export default function UserBoard() {
  // const { users } = useUser();
  const router = useRouter();
  const { articleList } = useArticleList();

  // const commentList = users
  //   ?.filter((user) => user.Comment?.length > 0)
  //   .flatMap((user) =>
  //     user.Comment.map((comment) => ({
  //       ...comment,
  //       user, // 사용자 정보 함께 전달
  //     }))
  //   );

  return (
    <div className={style.userBoradContainer}>
      <div className={style.userBoradBox}>
        <div className={style.userBoardTitle}>
          <p className={style.userBoardTitleFont}>게시글</p>
          <button
            className={style.userBoardTitleButton}
            onClick={() => {
              console.log("asdasdasdasdasd", articleList);
              router.push("/write");
            }}
          >
            글쓰기
          </button>
        </div>
        <div className={style.userBoardOption}>
          <input className={style.userBoardOptionInput} />
          <select className={style.userBoardOptionSelect}>
            <option>최신순</option>
            <option>오래된순</option>
          </select>
        </div>
        <div className={style.userBoardByBoardItem}>
          {articleList?.length > 0 ? (
            articleList.map((item) => (
              <span onClick={() => router.push(`/detail/${item.id}`)}>
                <BoardItem key={item.id} item={item} userInfo={item.user} />
              </span>
            ))
          ) : (
            <p>게시글이 없습니다.</p>
          )}
        </div>
      </div>
    </div>
  );
}
