import axios from "axios";

const BASE_URL = "https://panda-market-api.vercel.app";
export async function postSignUp({
  email,
  nickname,
  password,
  passwordConfirmation,
}) {
  try {
    console.log("보내는 데이터", {
      email,
      nickname,
      password,
      passwordConfirmation,
    });
    const res = await axios.post(`${BASE_URL}/auth/signUp`, {
      email,
      nickname,
      password,
      passwordConfirmation,
    });

    const data = res.data;

    return data;
  } catch (error) {
    console.error("API[postSignUp] Error : ", error);
    console.log("서버 응답:", error.response?.data);
    throw error;
  }
}
