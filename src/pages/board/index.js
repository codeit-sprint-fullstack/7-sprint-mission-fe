import BestPostList from "@/components/pages/board/BestPostList";
import styles from "./BoardPage.module.css";
import axios from "@/lib/axios.js";
import PostCard from "@/components/pages/board/PostCard";

export async function getServerSideProps(context) {
  try {
    const res = await axios.get("/boardPosts?pageSize=3&orderBy=likes");
    console.log("res: ", res);
    return {
      props: {
        bestPosts: res.data.data,
      },
    };
  } catch (error) {
    console.error("getServerSideProps 에러", error.message);

    return {
      props: {
        bestPosts: [],
        error: true,
      },
    };
  }
}

export default function BoardPage({ bestPosts, error }) {
  if (error) return <p>서버에서 데이터를 불러오지 못했습니다.</p>;
  return (
    <div className={styles.boardPageContainer}>
      <BestPostList bestPosts={bestPosts} />
      <PostCard />
    </div>
  );
}
