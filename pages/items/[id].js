import CommentInput from "@/components/CommentInput";
import Hearts from "@/components/Hearts";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ItemsId() {
  // 임시로 백엔드 연결 없이 하기 위해 임의 데이터로 진행함
  const [item, setItem] = useState({});

  useEffect(() => {
    setItem({
      id: 1,
      name: "아이패드 미니 팔아요",
      description: "액정 잔기스 좀 있습니다. 사용에는 문제 없습니다.",
      price: 500000,
      updatedAt: "2025-07-29",
      nickname: "네고사절",
    });
  }, []);

  if ((Object.keys(item).length = 0)) {
    return;
  }

  return (
    <div>
      <div>
        <div>
          <Image
            src={"/default.png"}
            width={486}
            height={486}
            alt="제품 상세 이미지"
            priority={true}
          />
          <div>
            <div>
              <div>{item.name}</div>
              <div>{item.price} </div>
              <div>상품 소개</div>
              <div>{item.description} </div>
              <div>상품 태그</div>
              <div>나중에 태그를..</div>
            </div>
            <div>
              <div>
                <Image
                  src={"/user-default-img.svg"}
                  width={40}
                  height={40}
                  alt="유저 이미지"
                />
                <div>
                  <div>{item.nickname}</div>
                  <div>{item.updatedAt} </div>
                </div>
              </div>
              <Hearts
                heartId={"1"}
                heartCount={123}
                productId={"1"}
                isHearted={false}
              />
            </div>
          </div>
        </div>
        <CommentInput />
      </div>
    </div>
  );
}
