import axios from "axios";
import { postBoard } from "@/pages/api/product";

export default function usePostBoard() {
  const submitPost = async (title, content) => {
    const res = await postBoard(title, content);
    return res;
  };

  return { submitPost };
}
