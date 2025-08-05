import { useState } from "react";
import { fetchLogin, getLogin } from "./api/login";
import { useAuth } from "@/Auth/authprovider";
import { useRouter } from "next/router";
export default function Login() {
  const [value, setValue] = useState({ email: "", password: "" });
  const { login } = useAuth();
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value: inputValue } = e.target;
    setValue((prev) => ({
      ...prev,
      [name]: inputValue,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetchLogin({
        email: value.email,
        password: value.password,
      });
      const { accessToken, refreshToken } = res.data;
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      const userData = await getLogin(accessToken);

      login(userData, accessToken, refreshToken);
      router.push("/");
      console.log("로그인성공");
    } catch (error) {
      console.log("로그인실패", error);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>login</label>
          <input
            type="email"
            name="email"
            value={value.email}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <label>password</label>
          <input
            type="password"
            name="password"
            value={value.password}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <button>로그인</button>
        </div>
      </form>
      <div>
        <button
          onClick={() => {
            router.push("/signup");
          }}
        >
          회원가입
        </button>
      </div>
    </div>
  );
}

// asdasdmple@email.com   123123123
