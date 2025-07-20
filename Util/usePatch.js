import axios from "axios";
import { patchComment } from "@/pages/api/product";
export default function usePatch() {
  const submitPatch = async (id, content) => {
    const res = await patchComment(id, content);
    return res;
  };

  return { submitPatch };
}
