import Box from "../../components/board/box";
import List from "../../components/board/list";
import Select from "../../components/market/select";
import style from "./board.module.css";

function Board() {
  const dummyPost = {
    title: "오늘의 주식시장 분석",
    user: {
      img: "/assets/user1.png",
      nickname: "개발자남영",
    },
    img: "/assets/post1.png",
    heart: 42,
    time: "2025-09-02",
  };
  return (
    <div>
      <div>
        <p>베스트 게시글</p>
        <div className={style.BestList}>
          <Box {...dummyPost}></Box>
          <Box {...dummyPost}></Box>
          <Box {...dummyPost}></Box>
        </div>
      </div>
      <div className={style.ListBox}>
        <div className={style.ListTitle}>
          <p>게시글</p>
          <button>글쓰기</button>
        </div>
        <div className={style.ListTitle}>
          <input className={style.ListTitleInput}></input>
          <Select />
        </div>
        <List {...dummyPost} />
        <List {...dummyPost} />
        <List {...dummyPost} />
      </div>
    </div>
  );
}

export default Board;
