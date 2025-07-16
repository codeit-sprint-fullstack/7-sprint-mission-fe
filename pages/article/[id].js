import IdArticleContent from "@/components/IdArticleContent";
import CommentInput from "@/components/CommentInput";
import CommentList from "@/components/CommentList";
import CustomButtonSquare from "@/components/CustomButtonSquare";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ArticleId() {
  const [isLoading, setIsLoading] = useState(false);
  const [article, setArticle] = useState({});
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    async function getArticleById(id) {
      setIsLoading(true);
      if (id) {
        try {
          const res = await axios.get(`http://localhost:5000/article/${id}`);
          setArticle(res.data);
          console.log(res.data);
        } catch (e) {
          console.error(e);
        } finally {
          setIsLoading(false);
        }
      }
    }

    getArticleById(id);
  }, [id]);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  return (
    <>
      <div>
        <IdArticleContent data={article} />
        <CommentInput />
        <CommentList />
      </div>
      <CustomButtonSquare text="목록으로 돌아가기" />
    </>
  );
}
