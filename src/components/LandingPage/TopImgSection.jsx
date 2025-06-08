function TopImgSection() {
  return (
    <section className="top image">
      <div className="top-image-main">
        <div className="top-image-text">
          <h2>일상의 모든 물건을 거래해 보세요</h2>
          <a href="items.html" className="items link">
            구경하러 가기
          </a>
        </div>
        <img
          className="top-image"
          src="./image/Img_home_top.png"
          alt="상단 이미지"
        />
      </div>
    </section>
  );
}

export default TopImgSection;
