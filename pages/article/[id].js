import IdArticleContent from "@/components/IdArticleContent";
import CommentInput from "@/components/CommentInput";
import CommentList from "@/components/CommentList";
import CustomButtonSquare from "@/components/CustomButtonSquare";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "@/styles/articleId.module.css";

export default function ArticleId() {
  const [isLoading, setIsLoading] = useState(true);
  const [article, setArticle] = useState({});
  const [newComment, setNewComment] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (!id) {
      return;
    }

    async function getArticleById(id) {
      setIsLoading(true);
      try {
        const res = await axios.get(`http://localhost:5000/article/${id}`);
        setArticle(res.data);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    }

    getArticleById(id);
  }, [id, newComment]);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  return (
    <div className={styles.articleId}>
      <div className={styles.articleIdBox}>
        <div className={styles.content}>
          <IdArticleContent data={article} />
          <CommentInput data={article} onNewComment={setNewComment} />
          <CommentList data={article} />
        </div>
        <CustomButtonSquare
          text="목록으로 돌아가기"
          onClick={() => {
            router.push("/article");
          }}
          valid={true}
        />
      </div>
    </div>
  );
}
