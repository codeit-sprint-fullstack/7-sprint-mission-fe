import ImgHome3 from "../../../assets/img/Img_home_03.png";

function RegisterSection() {
  return (
    <section className="main register">
      <div className="register-main">
        <img
          className="section-image"
          src={ImgHome3}
          alt="메인 3번 섹션 이미지"
        />
        <div className="section-main-text register-main-text">
          <p className="section-title">Register</p>
          <h2>
            판매를 원하는 <br /> 상품을 등록하세요
          </h2>
          <p className="section-text">
            어떤 물건이든 판매하고 싶은 상품을 <br /> 쉽게 등록하세요
          </p>
        </div>
      </div>
    </section>
  );
}

export default RegisterSection;
