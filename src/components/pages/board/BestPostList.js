import BestPostCard from "./BestPostCard";
import styles from "./BestPostList.module.css";

export default function BestPostList({ bestPosts }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>베스트 게시글</h2>
      <div className={styles.list}>
        {bestPosts.map((post) => (
          <BestPostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
