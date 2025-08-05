import axios from "axios";
import { realPostArticles } from "@/pages/api/articles";

export default function usePostBoard() {
  const submitPost = async (image = "https://example.com", content, title) => {
    const res = await realPostArticles(image, content, title);
    console.log("useArticle에서잘보내지나? res", res);
    return res;
  };

  return { submitPost };
}
