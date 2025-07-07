// components/ArticleCard.js
import Image from "next/image";
import styles from "./ArticleCard.module.css";
import SafeImage from "./SafeImage";

export default function ArticleCard({ article }) {
  return (
    <div>
      <p>{article.title}</p>
      {article.image && (
        <SafeImage
          src={article.image}
          alt={article.title}
          width={100}
          height={100}
        />
      )}
      <p>{article.writer.nickname}</p>
      <p>{article.likeCount} ❤️</p>
    </div>
  );
}
