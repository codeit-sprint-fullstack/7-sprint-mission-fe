import { useQuery } from "@tanstack/react-query";
import { fetchUserInfo } from "../../api/user";
import type { UserInfo } from "../../api/user";

export const useUser = () => {
  return useQuery<UserInfo, Error>({
    queryKey: ["me"],
    queryFn: fetchUserInfo,
    retry: false, // 실패 시 재시도 안 함
  });
};
