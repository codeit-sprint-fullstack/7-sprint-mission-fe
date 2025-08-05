import { fetchUserList } from "@/pages/api/product";
import { useEffect, useState } from "react";

export default function useUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUserList().then((data) => setUsers(data));
  }, []);

  return { users, setUsers };
}
