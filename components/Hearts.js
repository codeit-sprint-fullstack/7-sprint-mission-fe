import Image from "next/image";
import IcHeart from "@/public/ic_heart.svg";
import IcHeartFilled from "@/public/ic_heart_filled.svg";
import styles from "./Hearts.module.css";
import axios from "axios";
import { useState } from "react";

// 여기서 id는 heart 기록의 아이디
export default function Hearts({
  heartId,
  productId,
  articleId,
  userId,
  heartCount,
}) {
  const [isLoading, setIsLoading] = useState(false);
  const category = productId ? "pHeart" : "aHeart";
  const id = heartId ? heartId.id : undefined;

  async function deleteHeart(category, id) {
    setIsLoading(true);
    try {
      const res = await axios.patch(`http://localhost:5000/${category}/${id}`, {
        data: { canceled: true },
      });
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  async function createHeart(category, userId, productId, articleId) {
    setIsLoading(true);
    try {
      const res = await axios.post(`http://localhost:5000/${category}`, {
        data: {
          userId,
          ...(productId ? { productId } : {}),
          ...(articleId ? { articleId } : {}),
        },
      });
    } catch (e) {
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  }

  const handleHeartBtn = (e) => {
    e.preventDefault();

    // 로그인 안하면 좋아요 이용 불가
    if (!userId) {
      alert("좋아요 기능은 로그인 후 이용할 수 있습니다.");
      return;
    }

    // 아직 기존 데이터 전송 도중이라면(patch든 post든) 버튼 작동 막음
    if (isLoading) {
      return;
    }

    if (id) {
      // id가 있다 -> 이미 좋아요를 눌렀다 -> 다시 한 번 누르면 해당 좋아요 취소
      // 이 때 heart 로그를 아예 삭제할 것인가? 아니면 canceled 속성을 신설하여 누르고 취소한 기록을 남길 것인가? 일단 canceled로 함
      // patch 함수로 canceled 수정
      deleteHeart(category, id);
    } else {
      // id가 없다 -> 새롭게 좋아요를 누른 것 -> 좋아요 기록 생성
      createHeart(category, userId, productId, articleId);
    }
  };

  return (
    <div className={styles.heart}>
      <Image
        src={id ? IcHeartFilled : IcHeart}
        onClick={handleHeartBtn}
        className={styles.heartBtn}
        alt="이미지"
      />
      <div className={styles.heartCount}>{heartCount}</div>
    </div>
  );
}
