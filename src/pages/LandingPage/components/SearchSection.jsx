import ImgHome2 from "../../../assets/img/Img_home_02.png";

function SearchSection() {
  return (
    <section className="main search">
      <div className="search-main">
        <div className="search-main-text section-main-text">
          <p className="section-title">Search</p>
          <h2>
            구매를 원하는 <br /> 상품을 검색하세요
          </h2>
          <p className="section-text">
            구매하고 싶은 물품은 검색해서 <br /> 쉽게 찾아보세요
          </p>
        </div>
        <img
          className="section-image"
          src={ImgHome2}
          alt="메인 2번 섹션 이미지"
        />
      </div>
    </section>
  );
}

export default SearchSection;
