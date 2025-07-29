// 유저 인증, 인가용 커스텀 훅

export default function useAuth() {
  // 로컬스토리지에 유저 데이터, 토큰 저장
  function userLogin(data) {
    window.localStorage.setItem("accessToken", data.accessToken);
    window.localStorage.setItem("refreshToken", data.refreshToken);
    window.localStorage.setItem("user", JSON.stringify(data.user));
  }

  // 로컬스토리지의 유저 데이터, 토큰 삭제
  function userLogout() {
    window.localStorage.removeItem("accessToken");
    window.localStorage.removeItem("refreshToken");
    window.localStorage.removeItem("user");
  }

  // 로컬스토리지에 있는 유저 데이터, 토큰을 가져오기
  function userSetting() {
    const user = JSON.parse(window.localStorage.getItem("user"));
    const accessToken = window.localStorage.getItem("accessToken");

    return { user, accessToken };
  }

  return { userLogin, userLogout, userSetting };
}
