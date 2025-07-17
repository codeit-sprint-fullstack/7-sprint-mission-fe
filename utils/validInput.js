// 유효한 값이 입력되었는지 검사하는 함수
// 일단은 "postArticle" 페이지에서 "제목"과 "내용"이 정상적으로 입력되었는지 확인 => 빈칸인지, 아닌지

export default function validInput(value) {
  if (value) {
    return true;
  } else {
    return false;
  }
}
