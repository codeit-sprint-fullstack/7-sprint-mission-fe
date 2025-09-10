import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../api/auth";
import style from "./form.module.css";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
interface LoginData {
  email: string;
  password: string;
}

interface User {
  id: string;
  email: string;
  token: string;
}

function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation<User, Error, LoginData>({
    mutationFn: login,
    onSuccess: (data: User) => {
      console.log("로그인 성공:", data);
      localStorage.setItem("token", data.token);
      queryClient.invalidateQueries({ queryKey: ["me"] });
      navigate("/");
    },
    onError: (error: Error) => {
      console.error("로그인 실패:", error.message);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutation.mutate({ email, password });
  };

  return (
    <form className={style.Container} onSubmit={handleSubmit}>
      <label>이메일</label>
      <input
        placeholder="이메일을 입력해주세요"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>비밀번호</label>
      <input
        type="password"
        placeholder="비밀번호를 입력해주세요"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className={style.FormButton}
        type="submit"
        disabled={!email || !password || mutation.isPending}
      >
        {mutation.isPending ? "로그인 중..." : "로그인"}
      </button>
      {mutation.status === "error" && mutation.error instanceof Error && (
        <p>{mutation.error.message}</p>
      )}
    </form>
  );
}

export default Form;
