import { useState, useEffect } from "react";
import styles from "@/styles/signup.module.css";
import Image from "next/image";
import CustomInput from "@/components/CustomInput";
import CustomButtonSquare from "@/components/CustomButtonSquare";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import useAuth from "@/lib/useAuth";
import {
  useEmail,
  useNickname,
  usePassword,
  usePasswordConfirmation,
} from "@/lib/useEmailPassword";
import SimpleLogin from "@/components/SimpleLogin";

function Signup() {
  const emailObject = useEmail();
  const passwordObject = usePassword();
  const nicknameObject = useNickname();
  const passwordConfirmationObject = usePasswordConfirmation();
  const { userSetting, userLogin } = useAuth();

  const router = useRouter();

  const onSignup = async () => {
    try {
      const res = await axios.post(
        "https://panda-market-api.vercel.app/auth/signUp",
        {
          email: emailObject.element,
          nickname: nicknameObject.element,
          password: passwordObject.element,
          passwordConfirmation: passwordConfirmationObject.element,
        },
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
          <CustomInput object={nicknameObject} />
          <CustomInput object={passwordObject} />
          <CustomInput
            object={passwordConfirmationObject}
            password={passwordObject.element}
          />
          <CustomButtonSquare
            text="회원가입"
            onClick={onSignup}
            valid={
              emailObject.checkValid() &&
              nicknameObject.checkValid() &&
              passwordObject.checkValid() &&
              passwordConfirmationObject.checkValid(passwordObject.element)
            }
            type="long"
          />
          <SimpleLogin />
          <div className={styles.toLogin}>
            이미 회원이신가요?
            <Link href="/login" className={styles.link}>
              <span>로그인</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

Signup.useLayout = false;

export default Signup;
