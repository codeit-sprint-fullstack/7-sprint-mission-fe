import Link from "next/link";
import Image from "next/image";
import BestBadge from "./BestBadge";
import styles from "./BestPostCard.module.css";

// TODO: 기본이미지 결정 후 이미지 변경하기
const DEFAULT_IMAGE_URL = "/images/post.png";
export default function BestPostCard({ post }) {
  const { createdAt } = post;
  const dateOnly = createdAt.slice(0, 10);

  return (
    <Link href={`/board/${post.id}`} className={styles.cardContainer}>
      <BestBadge />
      <div className={styles.contentWrapper}>
        <p className={styles.title}>{post.title}</p>
        <div className={styles.imageContainerWithPadding}>
          <div className={styles.imageContainer}>
            {/*TODO: 여러사람들이 올리는 이미지를 어떻게 저장할것인지 결정 후 next.config에 추가하여 사용하기 */}
            <Image
              className={styles.postImage}
              src={post.imageUrl || DEFAULT_IMAGE_URL}
              alt="상품이미지"
              fill
              sizes="20vw"
            />
          </div>
        </div>
      </div>
      <div className={styles.metaContainer}>
        <div className={styles.metaSubContainer}>
          <p className={styles.author}>{post.userNickname}</p>
          <div className={styles.likesContainer}>
            {/*TODO: USER기능 구현 후 좋아요 기능 구현 */}
            <Image
              src={"/images/icons/ic_heart.svg"}
              alt="좋아요 이모지"
              width={16}
              height={16}
            />
            <p>{post.likesCount}</p>
          </div>
        </div>
        <p className={styles.date}>{dateOnly}</p>
      </div>
    </Link>
  );
}
