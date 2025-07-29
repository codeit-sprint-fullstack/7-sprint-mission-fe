import { useRouter } from "next/router";
import styles from "./BigTitle.module.css";
import Image from "next/image";

export default function BigTitle() {
  const router = useRouter();

  return (
    <div
      className={styles.title}
      onClick={() => {
        router.push("/");
      }}
    >
      <Image
        src={"/panda-logo.svg"}
        width={103}
        height={103}
        alt="메인 로고"
        priority={true}
      />
      <h1 className={styles.titleText}>판다마켓</h1>
    </div>
  );
}
