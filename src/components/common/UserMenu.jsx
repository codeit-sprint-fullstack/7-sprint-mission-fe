import { useAuth } from "@/context/AuthContext";
import logout from "@/utils/logout";
import Image from "next/image";
import Link from "next/link";
import styles from "./UserMenu.module.css";
import Button from "./Button";

export default function UserMenu() {
  const { auth, setAuth } = useAuth();
  const DEFAULT_IMAGE = "/images/icons/ic_default_user_image.svg";

  if (!auth?.user) return null;

  // 로그아웃 버튼 만든 후 , 이 함수 적용
  const handleLogout = () => {
    logout(setAuth);
  };

  return (
    <div className={styles.menuContainer}>
      <Link href="/me" className={styles.userWrapper}>
        <div className={styles.imageContainer}>
          <Image
            src={auth?.user?.image || DEFAULT_IMAGE}
            width={40}
            height={40}
            alt="유저 이미지"
            className={styles.userImage}
          />
        </div>
        <p className={styles.userNickname}>{auth?.user?.nickname}</p>
      </Link>
      <Button onClick={handleLogout} size="small">
        로그아웃
      </Button>
    </div>
  );
}
