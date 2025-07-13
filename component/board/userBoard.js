import BoardItem from "./boardItem";
import style from "@/styles/component.module.css";
import { useRouter } from "next/router";
import useArticleList from "@/Util/useArticlesList";

export default function UserBoard() {
  const router = useRouter();
  const { articleList } = useArticleList();

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
              <span
                key={item.id}
                onClick={() => router.push(`/detail/${item.id}`)}
              >
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
