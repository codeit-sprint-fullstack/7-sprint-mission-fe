import { useEffect, useState } from "react";
import Button from "@/components/common/Button";
import SearchInput from "@/components/common/SearchInput";
import PostCard from "./PostCard";
import styles from "./PostCardList.module.css";
import axios from "@/lib/axios";
// TODO: 무한스크롤 기능 구현 필요
export default function PostCardList() {
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("newest");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get("/boardPosts", {
          params: {
            search: search,
            orderBy: sort,
          },
        });
        console.log("검색어: ", search);
        setPosts(res.data.data);
      } catch (err) {
        console.error("게시글 로딩 실패:", err.message);
        setPosts([]);
      }
    };

    fetchPosts();
  }, [search, sort]);

  return (
    <section className={styles.postListSection}>
      <div className={styles.header}>
        <h2 className={styles.title}>게시글</h2>
        <Button href="/board/new" size="small" color="primary100">
          글쓰기
        </Button>
      </div>

      <div className={styles.filterBar}>
        <div className={styles.searchBar}>
          <SearchInput
            value={search}
            onChange={(e) => {
              console.log("입력값: ", e.target.value);
              setSearch(e.target.value);
            }}
          />
        </div>
        <select
          className={styles.select}
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="newest">최신순</option>
          <option value="likes">좋아요순</option>
        </select>
      </div>

      <div className={styles.cardList}>
        {posts.length === 0 ? (
          <p className={styles.noResult}>검색 결과가 없습니다.</p>
        ) : (
          posts.map((post) => <PostCard key={post.id} post={post} />)
        )}
      </div>
    </section>
  );
}
