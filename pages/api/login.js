import axios from "axios";
// const BASE_URL = "https://panda-market-api.vercel.app";

const instance = axios.create({ baseURL: "/api", withCredentials: true });

export async function fetchLogin(data) {
  try {
    console.log("데이터넘어가나요? 로그인", data);
    const res = await instance.post("/auth/signIn", data);
    return res;
  } catch (error) {
    console.error("API[fetchLogin] error", error);
    throw error;
  }
}

export async function getLogin(accessToken) {
  try {
    const res = await instance.get("/users/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return res.data;
  } catch (error) {
    console.log("API[getLogin] error", error);
    throw error;
  }
}
