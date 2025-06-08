import BottomImgSection from "./LandingPage/BottomImgSection";
import HotItemSection from "./LandingPage/HotItemSection";
import RegisterSection from "./LandingPage/RegisterSection";
import SearchSection from "./LandingPage/SearchSection";
import TopImgSection from "./LandingPage/TopImgSection";

function LandingMain() {
  return (
    <>
      <TopImgSection />
      <HotItemSection />
      <SearchSection />
      <RegisterSection />
      <BottomImgSection />
    </>
  );
}

export default LandingMain;

/* 
랜딩메인의 구조는 상단 이미지 + 섹션 3개 + 하단 이미지

상하단 이미지 구조
- 타이틀 문구
- 이미지

섹션 3개 구조
- 텍스트 영역
    - 영어 문구
    - 볼드체 문구
    - 상세 설명
- 이미지 영역
이 때 텍스트 영역과 이미지 영역의 순서는 바뀔 수 있음
*/
