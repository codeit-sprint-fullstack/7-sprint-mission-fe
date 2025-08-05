import style from "@/styles/component.module.css";
import PandaIcon from "@/public/icon_panda.svg";
import Image from "next/image";
import { useAuth } from "@/Auth/authprovider";
import { useRouter } from "next/router";
import defaultPanda from "@/public/defaultImage.png";

export default function NavBar() {
  const { user } = useAuth();
  const router = useRouter();

  const goToProfile = () => {
    router.push("/profile");
  };

  const goToLogin = () => {
    router.push("/login");
  };
  return (
    <div className={style.navContainer}>
      <div className={style.navBox}>
        <div className={style.navBox}>
          {/*판다마켓로고 */}
          <Image src={PandaIcon} width={50} height={50} alt="로고이미지" />
          <p>판다마켓</p>
        </div>
        <div>
          {/* 자유게시판 */}
          <p onClick={() => router.push("/")}>자유게시판</p>
        </div>
        <div>
          {/* 중고마켓 */}
          <p onClick={() => router.push("/item")}>중고마켓</p>
        </div>
      </div>
      <div>
        {/* 로그인버튼 */}
        {user ? (
          <div className={style.navUser}>
            <Image
              className={style.DetailCommentListImage}
              src={defaultPanda || user.image}
              width={30}
              height={30}
            ></Image>
            <p onClick={goToProfile}>{user.nickname}님</p>
          </div>
        ) : (
          <button onClick={goToLogin}>로그인</button>
        )}
      </div>
    </div>
  );
}
