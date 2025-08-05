import LabeledInput from "@/components/common/LabeledInput";
import Logo from "@/components/common/Logo";
import PasswordInput from "@/components/common/PasswordInput";
import { useAuth } from "@/context/AuthContext";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./Login.module.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const { setAuth } = useAuth();
  const router = useRouter();

  const validate = () => {
    const newErrors = { email: "", password: "" };
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      newErrors.email = "이메일을 입력해 주세요.";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "유효한 이메일 형식을 입력해 주세요.";
    }
    if (!password.trim()) newErrors.password = "비밀번호를 확인해 주세요.";
    setErrors(newErrors);
    return !newErrors.email && !newErrors.password;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    try {
      const res = await axios.post(
        "https://panda-market-api.vercel.app/auth/signIn",
        {
          email,
          password,
        }
      );

      const { accessToken, refreshToken, user } = res.data;

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      setAuth({ user });

      router.push("/");
    } catch (err) {
      console.error("로그인 실패:", err);
      const message = err.response?.data?.message || "로그인에 실패했습니다.";
      alert(message);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <section className={styles.loginContainer}>
      <Logo size="large"></Logo>
      <form className={styles.form} onSubmit={handleSubmit}>
        <LabeledInput
          label="이메일"
          id="userName"
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일을 입력해주세요"
          autoComplete="username"
          error={errors.email}
        />
        <PasswordInput
          label="비밀번호"
          id="userPassword"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호를 입력해주세요"
          autoComplete="current-password"
          error={errors.password}
        />
        <button type="submit" className={styles.button}>
          로그인
        </button>
      </form>
      <div className={styles.footerText}>
        <p className={styles.footerDescription}>판다마켓이 처음이신가요?</p>
        <Link href="/signup" className={styles.signupLink}>
          회원가입
        </Link>
      </div>
    </section>
  );
}
