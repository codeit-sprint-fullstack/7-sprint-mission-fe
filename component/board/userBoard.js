import BoardItem from "./boardItem";
import style from "@/styles/component.module.css";
import { useRouter } from "next/router";
import useArticleList from "@/Util/useArticlesList";
import { useEffect, useState } from "react";

export default function UserBoard() {
  const router = useRouter();
  const [searchKeyword, setSearchKeyWord] = useState("");
  const [orderBy, setOrderBy] = useState();
  // 오더바이 넘기는법 생각해보셈
  const { articleList } = useArticleList();
  const filteredArticles = articleList?.filter((item) =>
    item.title.toLowerCase().includes(searchKeyword.toLowerCase())
  );
  useEffect(() => {
    console.log("지금값제대로나오나요??", articleList);
  }, []);

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
          <input
            className={style.userBoardOptionInput}
            value={searchKeyword}
            onChange={(e) => setSearchKeyWord(e.target.value)}
          />
          <select
            className={style.userBoardOptionSelect}
            value={orderBy}
            onChange={(e) => setOrderBy(e.target.value)}
          >
            <option value="recent">최신순</option>
            <option value="old">오래된순</option>
          </select>
        </div>
        <div className={style.userBoardByBoardItem}>
          {searchKeyword === "" ? (
            articleList?.length > 0 ? (
              articleList.map((item) => (
                <span
                  key={item.id}
                  onClick={() => router.push(`/detail/${item.id}`)}
                >
                  <BoardItem item={item} userInfo={item.user} />
                </span>
              ))
            ) : (
              <p>게시글이 없습니다.</p>
            )
          ) : filteredArticles?.length > 0 ? (
            filteredArticles.map((item) => (
              <span
                key={item.id}
                onClick={() => router.push(`/detail/${item.id}`)}
              >
                <BoardItem item={item} userInfo={item.user} />
              </span>
            ))
          ) : (
            <p>검색 결과가 없습니다.</p>
          )}
        </div>
      </div>
    </div>
  );
}
