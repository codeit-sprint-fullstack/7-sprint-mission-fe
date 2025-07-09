import Panda from "@/public/panda-logo.svg";
import Image from "next/image";

function BestArticle() {
  return (
    <>
      <div>Best</div>
      <div>
        <div>이거 얼마에 팔아야 하나요?</div>
        <Image src={Panda} />
      </div>
      <div>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </>
  );
}

export default function BestArticleSection() {
  return (
    <>
      <div>베스트 게시글</div>
      <div>
        <BestArticle />
      </div>
    </>
  );
}
