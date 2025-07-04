import style from "@/styles/component.module.css";
import PandaIcon from "@/public/icon_panda.svg";
import Image from "next/image";
export default function NavBar() {
  return (
    <>
      <div className={style.navContainer}>
        <div className={style.navBox}>
          <div className={style.navBox}>
            {" "}
            {/*판다마켓로고 */}
            <Image src={PandaIcon} style={{ width: 50, height: 50 }} />
            <p>판다마켓</p>
          </div>
          <div>
            {/* 자유게시판 */}
            <p>자유게시판</p>
          </div>
          <div>
            {/* 중고마켓 */}
            <p>중고마켓</p>
          </div>
        </div>
        <div>
          {/* 로그인버튼 */}
          <button>로그인</button>
        </div>
      </div>
    </>
  );
}
