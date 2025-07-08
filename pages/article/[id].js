import ArticleContent from "@/components/ArticleContent";
import CommentInput from "@/components/CommentInput";
import CommentList from "@/components/CommentList";
import CustomButtonSquare from "@/components/CustomButtonSquare";

export default function ArticleId() {
  return (
    <>
      <div>
        <ArticleContent />
        <CommentInput />
        <CommentList />
      </div>
      <CustomButtonSquare text="목록으로 돌아가기" />
    </>
  );
}
