import axios from "axios";
import { patchArticle } from "@/pages/api/product";

export default function usePatchArticle() {
  const articlePatch = async (id, title, content) => {
    const res = patchArticle(id, title, content);
    return res;
  };

  return { articlePatch };
}
