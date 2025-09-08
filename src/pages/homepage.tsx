import Area from "../components/landing/area";
import Section from "../components/landing/section";
import image from "../assets/ui/Img_home_01.png";
import homeImage from "../assets/ui/Img_home_02.png";
import lastImage from "../assets/ui/Img_home_03.png";
import AreaBottom from "../components/landing/areabottom";

function homePage() {
  return (
    <>
      <Area />
      <Section
        imgLink={image}
        subTitle={"Hot item"}
        title={`인기 상품을\n확인해 보세요`}
        context={"가장 HOT한 중고거래 물품을\n판다마켓에서 확인해보세요"}
      />
      <Section
        imgLink={homeImage}
        subTitle={"Search"}
        title={"구매를 원하는\n상품을 검색하세요"}
        context={"구매하고 싶은  물품은 검색해서\n쉽게 찾아보세요"}
        option={true}
      />
      <Section
        imgLink={lastImage}
        subTitle={"Register"}
        title={"판매를 원하는\n상품을 등록하세요"}
        context={"어떤 물건이든 판매하고 싶은 상품을\n쉽게 등록하세요"}
      />
      <AreaBottom />
    </>
  );
}

export default homePage;
