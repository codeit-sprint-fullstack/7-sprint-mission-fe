export default function logout(setAuth) {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  setAuth(null);
}
