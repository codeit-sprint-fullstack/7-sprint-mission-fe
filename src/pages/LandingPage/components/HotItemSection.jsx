import ImgHome1 from "../../../assets/img/Img_home_01.png";

function HotItemSection() {
  return (
    <section className="main hot-item">
      <div className="hot-item-main">
        <img
          className="section-image"
          src={ImgHome1}
          alt="메인 1번 섹션 이미지"
        />
        <div className="section-main-text hot-item-main-text">
          <p className="section-title">Hot item</p>
          <h2>
            인기 상품을 <br /> 확인해 보세요
          </h2>
          <p className="section-text">
            가장 HOT한 중고거래 물품을 <br /> 판다 마켓에서 확인해 보세요
          </p>
        </div>
      </div>
    </section>
  );
}

export default HotItemSection;
