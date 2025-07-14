import DefaultImg from "@/public/default.png";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./BestArticleSection.module.css";
import Hearts from "./Hearts";

function BestArticle({ article }) {
  if (!article) {
    return <div>로딩 중...</div>;
  }

  return (
    <div className={styles.item}>
      <div className={styles.bestMark}>
        <Image
          src={"/ic_medal.svg"}
          className={styles.medal}
          alt="메달"
          width={16}
          height={16}
        />
        Best
      </div>
      <div className={styles.content}>
        <div className={styles.contentTitle}>{article.title}</div>
        <Image src={DefaultImg} className={styles.articleImg} alt="이미지" />
      </div>
      <div className={styles.info}>
        <p className={styles.userName}>{article.user.nickname}</p>
        <Hearts
          heartId={article.AHeart[0]}
          articleId={article.id}
          heartCount={article._count.AHeart}
        />
        <p className={styles.date}>{article.updatedAt.split("T")[0]}</p>
      </div>
    </div>
  );
}

export default function BestArticleSection() {
  const [bestArticles, setBestArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getBestArticles() {
      setIsLoading(true);
      try {
        const res = await axios.get("http://localhost:5000/article", {
          params: { limit: 3 },
        });
        setBestArticles([...res.data, ...res.data, ...res.data]);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    }

    getBestArticles();
  }, []);

  let count = 1;

  if (isLoading) {
    return <div>로딩 중</div>;
  }

  return (
    <div className={styles.bestArticleSection}>
      <div className={styles.title}>베스트 게시글</div>
      <div className={styles.list}>
        {bestArticles.map((bestArticle) => {
          const key = "a" + count;
          count += 1;
          return <BestArticle key={key} article={bestArticle} />;
        })}
      </div>
    </div>
  );
}
