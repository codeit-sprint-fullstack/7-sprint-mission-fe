import Panda from "@/public/panda-logo.svg";
import Image from "next/image";
import axios from "axios";
import { useEffect, useState } from "react";

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
  const [bestArticles, setBestArticles] = useState([]);

  async function getBestArticles() {
    try {
      const res = await axios.get("http://localhost:3000/article", {
        params: { limit: 3 },
      });

      return res.data;
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getBestArticles();
        console.log(data);
        setBestArticles(data);
      } catch (e) {
        console.log("getBestArticles 에러");
      }
    };

    getData();
  }, []);

  return (
    <>
      <div>베스트 게시글</div>
      <div>
        <BestArticle />
      </div>
    </>
  );
}
