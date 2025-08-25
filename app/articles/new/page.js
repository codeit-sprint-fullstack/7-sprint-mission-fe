// app/articles/new/page.jsx
"use client";

import { useRouter } from "next/navigation";
import ArticleForm from "@/components/Article/ArticleForm";
import { useUser } from "@/components/Contexts/UserContext";
import { postArticle } from "@/utils/apiRequest";

export default function NewArticlePage() {
  const router = useRouter();
  const { user } = useUser();

  const handleSubmit = async (formData) => {
    try {
      const data = await postArticle({
        ...formData,
        userId: user.id,
      });
      router.push(`/articles/${data.id}`);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div style={{ padding: "2rem" }}>
      <h2>게시글 쓰기</h2>
      <ArticleForm onSubmit={handleSubmit} />
    </div>
  );
}
