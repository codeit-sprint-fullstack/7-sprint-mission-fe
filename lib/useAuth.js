export default function useAuth() {
  function userLogin(data) {
    window.localStorage.setItem("accessToken", data.accessToken);
    window.localStorage.setItem("refreshToken", data.refreshToken);
    window.localStorage.setItem("user", JSON.stringify(data.user));
  }

  function userLogout() {
    window.localStorage.removeItem("accessToken");
    window.localStorage.removeItem("refreshToken");
    window.localStorage.removeItem("user");
  }

  function userSetting() {
    const user = window.localStorage.getItem("user");
    const accessToken = window.localStorage.getItem("accessToken");

    return { user, accessToken };
  }

  return { userLogin, userLogout, userSetting };
}
