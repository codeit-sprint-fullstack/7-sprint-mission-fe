/**
 * 현재 브라우저 창의 너비(innerWidth)에 따라 받아올 데이터 수를 리턴합니다.
 * - PC용 (1200px 이상): 10개
 * - 태블릿용 (744px 이상 ~ 1199px 이하): 6개
 * - 모바일용 (743px 이하): 4개
 */
export const getPageSizeForWidth = () => {
  const width = window.innerWidth;
  if (width >= 1200) return 10;
  if (width >= 744) return 6;
  return 4;
};
