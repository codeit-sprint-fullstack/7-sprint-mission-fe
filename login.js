const emailInput = document.getElementById("formInputEmail");
const passwordInput = document.getElementById("formInputPassword");
const loginButton = document.getElementById("loginButton");

const errorBorder = document.getElementsByClassName("error-border");
const errorText = document.getElementsByClassName("error-text");
//error-border[0] - email
//error-border[1] - pw

function validatePw() {
  const modPwInput = passwordInput.value.trim();
  if (modPwInput === "") {
    //공란처리
    errorBorder[1].style.border = "1px solid red";
    errorText[1].textContent = "비밀번호를 입력해주세요.";
    errorText[1].style.display = "block";
    return false;
  } else if (modPwInput.length < 8) {
    //비번 길이 검사
    errorBorder[1].style.border = "1px solid red";
    errorText[1].textContent = "비밀번호를 8자 이상 입력해주세요";
    errorText[1].style.display = "block";
    return false;
  } else if (!passwordInput.checkValidity()) {
    //pw checkValidity 통과 실패시
    errorBorder[1].style.border = "1px solid red";
    errorText[1].textContent = "잘못된 비밀번호 형식입니다.";
    errorText[1].style.display = "block";
    return false;
  } else {
    //정상
    errorBorder[1].style.border = "0px";
    errorText[1].textContent = "";
    errorText[1].style.display = "none";
    return true;
  }
  //https://velog.io/@purplew/input-validity
}

function validateEmail() {
  const modEmailInput = emailInput.value.trim();
  if (modEmailInput === "") {
    //공란처리
    errorBorder[0].style.border = "1px solid red";
    errorText[0].textContent = "이메일을 입력해주세요.";
    errorText[0].style.display = "block";
    return false;
  }
  //debounce fn으로 해결
  //  else if (modEmailInput.length <= 6) {
  //   //너무 초반부터 에러메시지 안뜨게 가리기
  //}
  else if (!emailInput.checkValidity()) {
    //이메일 checkValidity 통과 실패시
    errorBorder[0].style.border = "1px solid red";
    errorText[0].textContent = "잘못된 이메일 형식입니다.";
    errorText[0].style.display = "block";
    return false;
  } else {
    //정상
    errorBorder[0].style.border = "0px";
    errorText[0].textContent = "";
    errorText[0].style.display = "none";
    return true;
  }
}
function isEmailValid() {
  const value = emailInput.value.trim();
  return value !== "" && emailInput.checkValidity();
}
function isPasswordValid() {
  const value = passwordInput.value.trim();
  return value !== "" && value.length >= 8 && passwordInput.checkValidity();
}

function updateLoginBtnState() {
  // if (validatePw() && validateEmail())
  //이렇게 하면 이메일 칠때 비밀번호도 같이 검사해버림 따로 상태만 검사

  if (isEmailValid() && isPasswordValid()) {
    loginButton.disbled = false;
    loginButton.style.backgroundColor = "#3692ff";
    loginButton.style.cursor = "pointer";
  } else {
    loginButton.disabled = true;
    loginButton.style.backgroundColor = "#9ca3af";
    loginButton.style.cursor = "not-allowed";
  }
}

//debounce 계속 타이핑하고 있으면 잠시 지연시킴 = 글자치고 있을때는 검사를 안시켜서 에러메시지 안나옴
function debounce(fn, delay = 300) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

const debValEmail = debounce(validateEmail, 500);
const debValPw = debounce(validatePw, 500);

let eventArr = ["input", "blur"];
const validInputs = [
  { type: emailInput, validator: debValEmail },
  { type: passwordInput, validator: debValPw },
];

validInputs.forEach(({ type, validator }) => {
  eventArr.forEach((evt) => {
    type.addEventListener(evt, () => {
      validator();
      updateLoginBtnState();
    });
  });
});

// function handleEmailEvent() {
//   debValEmail();
//   updateLoginBtnState();
// }
// function handlePasswordEvent() {
//   debValPw();
//   updateLoginBtnState();
// }
// const eventArr = ["input", "blur"];
// eventArr.forEach((listenterEvt) => {
//   emailInput.addEventListener(listenterEvt, handleEmailEvent);
//   passwordInput.addEventListener(listenterEvt, handlePasswordEvent);
// });

/************************** */

// // emailInput.addEventListener("input", debValEmail);
// emailInput.addEventListener("input", () => {
//   debValEmail();
//   updateLoginBtnState();
// });
// // emailInput.addEventListener("blur", validateEmail);
// emailInput.addEventListener("blur", () => {
//   debValEmail();
//   updateLoginBtnState();
// });
// // passwordInput.addEventListener("input", debValPw);
// passwordInput.addEventListener("input", () => {
//   debValPw();
//   updateLoginBtnState();
// });
// // passwordInput.addEventListener("blur", validatePw);
// passwordInput.addEventListener("blur", () => {
//   debValPw();
//   updateLoginBtnState();
// });

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
