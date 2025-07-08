import CustomButtonSquare from "./CustomButtonSquare";
import InputBox from "./InputBox";
import SortOption from "./SortOption";
import Image from "next/image";
import ArticleItem from "./ArticleItem";
import styles from "./ArticleSection.module.css";

export default function ArticleSection() {
  return (
    <div className={styles.section}>
      <div className={styles.header}>
        <div className={styles.title}>게시글</div>
        <CustomButtonSquare text="글쓰기" />
      </div>
      <div className={styles.option}>
        <InputBox />
        <SortOption />
      </div>
      <div className={styles.articleList}>
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
        <ArticleItem />
      </div>
    </div>
  );
}
