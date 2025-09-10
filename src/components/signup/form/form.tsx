import style from "./form.module.css";
import { useState } from "react";
import { signUpUser } from "../../../api/user";
function Form() {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    signUpUser({ name: nickname, email, password, img: "" })
      .then((res) => console.log("회원가입 성공", res))
      .catch((err) => console.error("회원가입 실패", err));
  };
  return (
    <div>
      <form className={style.Container} onSubmit={handleSubmit}>
        <label>이메일</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="이메일을 입력해주세요"
        ></input>
        <label>닉네임</label>
        <input
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          placeholder="닉네임을 입력해주세요"
        ></input>
        <label>비밀번호</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="비밀번호를 입력해주세요"
        ></input>
        <label>비밀번호 확인</label>
        <input
          value={passwordCheck}
          onChange={(e) => setPasswordCheck(e.target.value)}
          type="password"
          placeholder="비밀번호를 다시 한 번 입력해주세요"
        ></input>
        <button
          type="submit"
          className={style.FormButton}
          disabled={!email || !password || !passwordCheck || !nickname}
        >
          회원가입
        </button>
      </form>
    </div>
  );
}

export default Form;
