import "../homeFeature/homeFeature.css";

const HomeFeaturesSectuon = () => {
  return (
    <>
      <section id="features" className="wrapper">
        <Feature
          imageSrc="images/home/feature1-image.png"
          alt="인기 상품"
          title="Hot item"
          heading="인기 상품을\n확인해 보세요"
          description="가장 HOT한 중고거래 물품을\n판다마켓에서 확인해 보세요"
        />
        <Feature
          imageSrc="images/home/feature2-image.png"
          alt="검색 기능"
          title="Search"
          heading="구매를 원하는\n상품을 검색하세요"
          description="구매하고 싶은 물품은 검색해서\n쉽게 찾아보세요"
        />
        <Feature
          imageSrc="images/home/feature3-image.png"
          alt="판매 상품 등록"
          title="Register"
          heading="판매를 원하는\n상품을 등록하세요"
          description="어떤 물건이든 판매하고 싶은 상품을\n쉽게 등록하세요"
        />
      </section>
    </>
  );
};

export default HomeFeaturesSectuon;
