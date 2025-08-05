import { useAuth } from "@/Auth/authprovider";

export default function Profile() {
  const { user, logout } = useAuth();

  if (!user) return <div>로그인 필요</div>;

  return (
    <div>
      <h1>환영합니다, {user.nickname}님!</h1>
      <button onClick={logout}>로그아웃하기</button>
    </div>
  );
}
