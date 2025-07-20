import { useState } from "react";
import { useRouter } from "next/router";
import { postSignUp } from "@/pages/api/signup";
import { useAuth } from "@/Auth/authprovider";
import { fetchLogin, getLogin } from "./api/login";

export default function SignUp() {
  const router = useRouter();
  const { login } = useAuth();

  const [form, setForm] = useState({
    email: "",
    nickname: "",
    password: "",
    passwordConfirmation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.passwordConfirmation) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      const sign = await postSignUp(form);

      const res = await fetchLogin({
        email: form.email,
        password: form.password,
      });
      const { accessToken, refreshToken } = res.data;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      const userData = await getLogin(accessToken);
      login(userData, accessToken, refreshToken);
      router.push("/");
    } catch (error) {
      console.log("회원가입 실패", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>id</label>
          <input
            onChange={handleChange}
            value={form.email}
            type="email"
            name="email"
          />
        </div>
        <div>
          <label>닉네임</label>
          <input
            onChange={handleChange}
            value={form.nickname}
            type="text"
            name="nickname"
          />
        </div>
        <div>
          <label>password</label>
          <input
            onChange={handleChange}
            value={form.password}
            type="password"
            name="password"
          />
        </div>
        <div>
          <label>password check</label>
          <input
            onChange={handleChange}
            value={form.passwordConfirmation}
            type="password"
            name="passwordConfirmation"
          />
        </div>
        <div>
          <button type="submit">회원가입</button>
        </div>
      </form>
    </div>
  );
}
