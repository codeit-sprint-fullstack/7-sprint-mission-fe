import LabeledInput from "@/components/common/LabeledInput";
import Logo from "@/components/common/Logo";
import PasswordInput from "@/components/common/PasswordInput";
import { useAuth } from "@/context/AuthContext";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./Signup.module.css";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [checkPassword, setcheckPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({
    email: "",
    nickname: "",
    password: "",
    checkPassword: "",
  });

  const validate = () => {
    const newErrors = {
      email: "",
      nickname: "",
      password: "",
      checkPassword: "",
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.trim()) {
      newErrors.email = "이메일을 입력해 주세요.";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "유효한 이메일 형식을 입력해 주세요.";
    }

    if (!nickname.trim()) {
      newErrors.nickname = "닉네임을 입력해 주세요.";
    }
    if (!password.trim()) {
      newErrors.password = "비밀번호를 입력해 주세요.";
    } else if (password.length < 8) {
      newErrors.password = "비밀번호는 최소 8자 이상이어야 합니다.";
    }
    if (!checkPassword.trim()) {
      newErrors.checkPassword = "비밀번호 확인을 입력해 주세요.";
    } else if (password !== checkPassword) {
      newErrors.checkPassword = "비밀번호가 일치하지 않습니다.";
    }

    setErrors(newErrors);

    return (
      !newErrors.email &&
      !newErrors.nickname &&
      !newErrors.password &&
      !newErrors.checkPassword
    );
  };

  const { setAuth } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);
    try {
      const res = await axios.post(
        "https://panda-market-api.vercel.app/auth/signUp",
        {
          email,
          nickname,
          password,
          passwordConfirmation: checkPassword,
        }
      );

      const { accessToken, refreshToken, user } = res.data;

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      setAuth({ user });

      router.push("/");
    } catch (err) {
      console.error("회원가입 실패: ", err);
      console.log("백엔드 메시지:", err.response?.data);
      const errorMessage =
        err.response?.data?.message || "알 수 없는 오류가 발생했습니다.";
      alert(errorMessage);
    }
  };
  return (
    <section className={styles.signupContainer}>
      <Logo size="large" />
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
        <LabeledInput
          label="닉네임"
          id="usernickname"
          type="text"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="닉네임을 입력해주세요"
          autoComplete="nickname"
          error={errors.nickname}
        />
        <PasswordInput
          label="비밀번호"
          id="userPassword"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="비밀번호를 입력해주세요"
          autoComplete="new-password"
          error={errors.password}
        />
        <PasswordInput
          label="비밀번호 확인"
          id="checkUserPassword"
          type="password"
          value={checkPassword}
          onChange={(e) => setcheckPassword(e.target.value)}
          placeholder="비밀번호를 다시 입력해주세요"
          autoComplete="new-password"
          error={errors.checkPassword}
        />
        <button type="submit" className={styles.button}>
          회원가입
        </button>
      </form>
      <div className={styles.footerText}>
        <p className={styles.footerDescription}>이미 회원이신가요?</p>
        <Link href="/login" className={styles.signupLink}>
          로그인
        </Link>
      </div>
    </section>
  );
}
