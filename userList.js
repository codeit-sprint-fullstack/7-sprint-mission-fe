export const initialUserList = [
  { email: "codeit1@codeit.com", password: "codeit101!", nickname: "코드잇1" },
  { email: "codeit2@codeit.com", password: "codeit202!", nickname: "코드잇2" },
  { email: "codeit3@codeit.com", password: "codeit303!", nickname: "코드잇3" },
  { email: "codeit4@codeit.com", password: "codeit404!", nickname: "코드잇4" },
  { email: "codeit5@codeit.com", password: "codeit505!", nickname: "코드잇5" },
  { email: "codeit6@codeit.com", password: "codeit606!", nickname: "코드잇6" },
];

// 👉 localStorage에 아무 값도 없다면 Initial 한 번만 저장
if (!localStorage.getItem("userList")) {
  localStorage.setItem("userList", JSON.stringify(initialUserList));
}
//그냥 이것만 하는 함수를 만들어서 눈에 잘 보이게 다른 개발자도 잘 알수있게 이런건 지양

export function saveUserList(userList) {
  //userList 객체 배열을 JSON 문자열로 변환하여 localStorage에 저장
  localStorage.setItem("userList", JSON.stringify(userList));
}

export function getUserList() {
  //localStorage에 저장된 userList 값을 JSON문자열로부터 JS객체로 변환
  //값이 없다면 빈배열 반환(기본값처리)
  return JSON.parse(localStorage.getItem("userList")) || [];
}
