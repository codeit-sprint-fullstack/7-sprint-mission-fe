import Image from "next/image";
import styles from "@/styles/login.module.css";
import CustomInput from "@/components/CustomInput";
import { useEffect, useState } from "react";
import CustomButtonSquare from "@/components/CustomButtonSquare";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import useAuth from "@/lib/useAuth";
import { useEmail, usePassword } from "@/lib/useEmailPassword";
import SimpleLogin from "@/components/SimpleLogin";

function Login() {
  const emailObject = useEmail();
  const passwordObject = usePassword();
  const { userLogin, userSetting } = useAuth();
  const router = useRouter();

  const onLogin = async () => {
    try {
      const res = await axios.post(
        "https://panda-market-api.vercel.app/auth/signIn",
        { email: emailObject.element, password: passwordObject.element },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const { accessToken } = res.data;

      if (accessToken) {
        userLogin(res.data);
        router.push("/items");
      }
    } catch (e) {
      alert("비밀번호가 일치하지 않습니다.");
    }
  };

  useEffect(() => {
    const { accessToken } = userSetting();

    if (accessToken) {
      router.push("/");
    }
  }, []);

  return (
    <div className={styles.login}>
      <div className={styles.main}>
        <div className={styles.title}>
          <Image
            src={"/panda-logo.svg"}
            width={103}
            height={103}
            alt="메인 로고"
            priority={true}
          />
          <h1 className={styles.titleText}>판다마켓</h1>
        </div>
        <div className={styles.content}>
          <CustomInput object={emailObject} />
          <CustomInput object={passwordObject} />
          <CustomButtonSquare
            text="로그인"
            onClick={onLogin}
            valid={emailObject.checkValid() && passwordObject.checkValid()}
            type="long"
          />
          <SimpleLogin />
          <div className={styles.toSignup}>
            판다마켓이 처음이신가요?
            <Link href="/signup" className={styles.link}>
              <span>회원가입</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

Login.useLayout = false;

export default Login;
