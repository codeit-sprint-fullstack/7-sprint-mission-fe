//a태그 & class newtab-link 인 애들은 새창으로 뜨게
const aTagNewTab = document.querySelectorAll("a.newtab-link");
aTagNewTab.forEach((x) => {
  x.setAttribute("target", "_blank");
});
//forEach 배열의 모든요소에 arrow함수 실행

//input태그에 required는 사용하면서 oninvalid oninput 기본값 지우기
const inputTagCustomValid = document.querySelectorAll("input.customValid");
inputTagCustomValid.forEach((x) => {
  x.setAttribute("oninvalid", "this.setcustomValidity(' ')");
  x.setAttribute("oninput", "this.setcustomValidity('')");
});
