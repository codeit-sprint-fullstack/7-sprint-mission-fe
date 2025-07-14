import Image from "next/image";
import Link from "next/link";
import styles from "./PostCard.module.css";

// TODO: 기본이미지 결정 후 이미지 변경하기
const DEFAULT_IMAGE_URL = "/images/post.png";

const DEFAULT_USER_IMAGE = "/images/common/default_user.svg";

const post = {
  id: "cd558be2-9538-4b9c-a9dc-18d4bba4356f",
  title: "APPLE 애플워치 SE 2세대 파는분 계신가요?",
  createdAt: "2025-07-12T09:19:24.799Z",
  likesCount: 0,
  userNickname: "minji",
  userImage: null,
};
export default function PostCard() {
  const { createdAt } = post;
  const dateOnly = createdAt.slice(0, 10);
  return (
    <Link href={`/board/${post.id}`} className={styles.cardContainer}>
      <div className={styles.contentWrapper}>
        <h2 className={styles.title}>{post.title}</h2>
        <div className={styles.imageContainerWithPadding}>
          <div className={styles.imageContainer}>
            {/*TODO: 여러사람들이 올리는 이미지를 어떻게 저장할것인지 결정 후 next.config에 추가하여 사용하기 */}
            <Image
              src={post.imageUrl || DEFAULT_IMAGE_URL}
              alt="상품 이미지"
              fill
              sizes="20vw"
            />
          </div>
        </div>
      </div>
      <div className={styles.metaContainer}>
        <div className={styles.metaSubContainer}>
          <div className={styles.userImageContinaerWithPadding}>
            <div className={styles.userImageContainer}>
              <Image
                src={post.userImage || DEFAULT_USER_IMAGE}
                alt="유저 이미지"
                fill
                sizes="10vw"
              />
            </div>
          </div>
          <p className={styles.author}>{post.userNickname}</p>
          <p className={styles.date}>{dateOnly}</p>
        </div>
        <div className={styles.likesContainer}>
          {/*TODO: USER기능 구현 후 좋아요 기능 구현 */}
          <Image
            src={"/images/icons/ic_heart.svg"}
            alt="좋아요 이모지"
            width={16}
            height={16}
          />
          <p className={styles.likeCount}>{post.likesCount}</p>
        </div>
      </div>
    </Link>
  );
}
