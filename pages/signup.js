import { useState, useEffect } from "react";
import styles from "@/styles/signup.module.css";
import Image from "next/image";
import CustomInput from "@/components/CustomInput";
import CustomButtonSquare from "@/components/CustomButtonSquare";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import useAuth from "@/lib/useAuth";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const { userSetting, userLogin } = useAuth();

  const router = useRouter();

  const onSignup = async () => {
    try {
      const res = await axios.post(
        "https://panda-market-api.vercel.app/auth/signUp",
        { email, nickname, password, passwordConfirmation },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { accessToken } = res.data;

      if (accessToken) {
        userLogin(res.data);
        router.push("/");
      }
    } catch (e) {
      console.error(e);
      alert("사용 중인 이메일입니다.");
    }
  };

  useEffect(() => {
    const { accessToken } = userSetting();

    if (accessToken) {
      router.push("/items");
    }
  }, []);

  return (
    <div className={styles.signup}>
      <div className={styles.main}>
        <div>
          <Image
            src={"/panda-logo.svg"}
            width={103}
            height={103}
            alt="메인 로고"
            priority={true}
          />
          <h1>판다마켓</h1>
        </div>
        <CustomInput name="이메일" value={email} onChange={setEmail} />
        <CustomInput name="닉네임" value={nickname} onChange={setNickname} />
        <CustomInput name="비밀번호" value={password} onChange={setPassword} />
        <CustomInput
          name="비밀번호 확인"
          value={passwordConfirmation}
          onChange={setPasswordConfirmation}
        />
        <CustomButtonSquare text="회원가입" onClick={onSignup} valid={true} />
        <div>
          이미 회원이신가요?
          <Link href="/login">
            <span>로그인</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

Signup.useLayout = false;

export default Signup;
