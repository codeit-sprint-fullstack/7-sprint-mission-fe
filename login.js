const emailInput = document.getElementById("formInputEmail");
const passwordInput = document.getElementById("formInputPassword");
const loginButton = document.getElementById("loginButton");

const emailBorder = document.getElementsByClassName("error-border");
const emailErrorText = document.getElementsByClassName("error-text");

function validateEmail() {
  const modEmailInput = emailInput.value.trim();
  if (modEmailInput === "") {
    //공란처리
    emailBorder[0].style.border = "1px solid red";
    emailErrorText[0].textContent = "이메일을 입력해주세요.";
    emailErrorText[0].style.display = "block";
  }
  //debounce fn으로 해결
  //  else if (modEmailInput.length <= 6) {
  //   //너무 초반부터 에러메시지 안뜨게 가리기
  //   emailBorder[0].style.border = "0px";
  //   emailErrorText[0].textContent = "";
  //   emailErrorText[0].style.display = "none";
  //} 
  else if (!emailInput.checkValidity()) {
    //이메일 checkValidity 통과 실패시
    emailBorder[0].style.border = "1px solid red";
    emailErrorText[0].textContent = "잘못된 이메일 형식입니다.";
    emailErrorText[0].style.display = "block";
  } else {
    //정상
    emailBorder[0].style.border = "0px";
    emailErrorText[0].textContent = "";
    emailErrorText[0].style.display = "none";
  }
}

function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

const debValEmail = debounce(validateEmail, 500);

emailInput.addEventListener("input", debValEmail);
emailInput.addEventListener("blur", validateEmail);

//이전 코드 삭제예정
// function checkEmailPwValidity() {
//   if (emailInput.checkValidity() && passwordInput.checkValidity()) {
//     console.log("둘다유효");
//     loginButton.disabled = false;
//     loginButton.style.backgroundColor = "#3692ff";
//     loginButton.style.cursor = "pointer";
//   } else {
//     console.log("이메일 혹은 비밀번호가 형식에 맞지 않습니다.");
//     loginButton.disabled = true;
//     loginButton.style.backgroundColor = "#9ca3af";
//     loginButton.style.cursor = "not-allowed";
//   }
// }

// emailInput.addEventListener("input", checkEmailPwValidity);
// passwordInput.addEventListener("input", checkEmailPwValidity);

// checkEmailPwValidity();
