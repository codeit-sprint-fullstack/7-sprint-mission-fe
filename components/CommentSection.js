import { useEffect, useState } from "react";
import CommentInput from "./CommentInput";
import CommentList from "./CommentList";
import axios from "axios";

export default function CommentSection({ articleId }) {
  // isLoading: 데이터 fetch가 완료되어야 화면이 렌더링 되게 하기 위한 상태관리. article과 comments 둘 다 확인
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [refetch, setRefetch] = useState(false);

  const handleRefetch = () => {
    setRefetch((prev) => {
      return !prev;
    });
  };

  useEffect(() => {
    async function getCommentsByArticle(articleId) {
      setIsLoading(true);
      try {
        const res = await axios.get(
          `http://localhost:5000/aComment/${articleId}`
        );
        setComments(res.data);
      } catch (e) {
        console.error(e);
      } finally {
        setIsLoading(false);
      }
    }

    getCommentsByArticle(articleId);
  }, [refetch]);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  return (
    <>
      <CommentInput articleId={articleId} onRefetch={handleRefetch} />
      <CommentList
        data={comments}
        articleId={articleId}
        onRefetch={handleRefetch}
      />
    </>
  );
}
