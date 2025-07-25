import { useEffect, useState } from "react";
import InputBox from "./InputBox";
import validInput from "@/utils/validInput";

export default function CustomInput({ name, value, onChange }) {
  const [valid, setValid] = useState(false);

  let placeholder = "";
  let secret = false;
  let type = "";

  switch (name) {
    case "이메일":
      placeholder = "이메일을 입력해주세요";
      type = "email";

      break;
    case "닉네임":
      placeholder = "닉네임을 입력해주세요";

      break;
    case "비밀번호":
      placeholder = "비밀번호를 입력해주세요";
      type = "password";
      secret = true;

      break;
    case "비밀번호 확인":
      placeholder = "비밀번호를 다시 한 번 입력해주세요";
      secret = true;

      break;
    default:
      console.log("name값 확인 필요");
  }

  return (
    <div>
      <label>{name}</label>
      <InputBox
        keyword={value}
        onChange={onChange}
        placeholder={placeholder}
        size="small"
        secret={secret}
      />
    </div>
  );
}
