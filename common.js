//a태그 & class newtab-link 인 애들은 새창으로 뜨게
const aTagNewTab = document.querySelectorAll("a.newtab-link");
aTagNewTab.forEach((x) => {
  x.setAttribute("target", "_blank");
});
//forEach 배열의 모든요소에 arrow함수 실행
