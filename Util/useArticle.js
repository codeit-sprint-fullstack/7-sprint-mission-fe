import axios from "axios";
import { postBoard } from "@/pages/api/product";

export default function usePostBoard() {
  const submitPost = async (title, content, userId) => {
    const res = await postBoard(title, content, userId);
    console.log("useArticle에서잘보내지나? res", res);
    return res;
  };

  return { submitPost };
}
