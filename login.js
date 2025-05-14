const emailInput = document.getElementById("formInputEmail");
const passwordInput = document.getElementById("formInputPassword");
const loginButton = document.getElementById("loginButton");
const togglePw = document.querySelector(".form-field-passVis");
const togglePwImg = document.getElementById("passVisImg");
// const errorBorder = document.getElementsByClassName("error-border");
// const errorText = document.getElementsByClassName("error-text");
const [errBorderEmail, errBorderPw] =
  document.getElementsByClassName("error-border");
const [errTextEmail, errTextPw] = document.getElementsByClassName("error-text");
//error-border[0] - email
//error-border[1] - pw

const modal = document.getElementById("loginModal");
const modalCloseBtn = document.getElementById("modalCloseBtn");
const modalMsg = modal.querySelector(".modal-message");

//모달 띄우기
function showModal(message) {
  modalMsg.textContent = message;
  modal.classList.remove("hidden");
}

let loginStatus = false;

//모달 닫기
modalCloseBtn.addEventListener("click", () => {
  modal.classList.add("hidden");
  if (loginStatus) {
    window.location.href = "items.html";
  }
  loginStatus = false;
  //질문필요 왜 모달닫기 확인때 loginStatus else에서
  //modal.classList.remove("hidden"); 이 없어도 모달이 닫아지는가?
  //  else {
  //   console.log("elseloginStatus : ", loginStatus);
  //   modal.classList.remove("hidden");
  // }
});

const USER_DATA = [
  { email: "codeit1@codeit.com", password: "codeit101!" },
  { email: "codeit2@codeit.com", password: "codeit202!" },
  { email: "codeit3@codeit.com", password: "codeit303!" },
  { email: "codeit4@codeit.com", password: "codeit404!" },
  { email: "codeit5@codeit.com", password: "codeit505!" },
  { email: "codeit6@codeit.com", password: "codeit606!" },
];

function checkLoginInfo() {
  const emailValue = emailInput.value;
  const pwValue = passwordInput.value;
  const loginValidity = USER_DATA.find((el) => {
    return el.email == emailValue && el.password == pwValue;
  });
  loginStatus = !!loginValidity; //undefined면 false 객체들어오면 true
  return loginValidity
    ? `${emailValue} 로그인 성공`
    : "아이디 혹은 비밀번호가 일치하지 않습니다.";
}
loginButton.addEventListener("click", () => {
  const msg = checkLoginInfo();
  showModal(msg);
  loginStatus = msg.includes("로그인 성공") ? true : false;
});

//비밀번호 표시 토글버튼
togglePw.addEventListener("click", () => {
  const isBlured = passwordInput.type === "text";
  passwordInput.type = isBlured ? "password" : "text";
  togglePwImg.src = isBlured
    ? "assets/btn_visibility_on_24px.svg"
    : "assets/btn_visibility_off_24px.svg";
  togglePw.ariaLable = isBlured ? "비밀번호 보기" : "비밀번호 숨기기";
});

function validatePw() {
  const modPwInput = passwordInput.value.trim();
  if (modPwInput === "") {
    //공란처리
    errBorderPw.style.border = "1px solid red";
    errTextPw.textContent = "비밀번호를 입력해주세요.";
    errTextPw.style.display = "block";
    return false;
  } else if (modPwInput.length < 8) {
    //비번 길이 검사
    errBorderPw.style.border = "1px solid red";
    errTextPw.textContent = "비밀번호를 8자 이상 입력해주세요";
    errTextPw.style.display = "block";
    return false;
  } else if (!passwordInput.checkValidity()) {
    //pw checkValidity 통과 실패시
    errBorderPw.style.border = "1px solid red";
    errTextPw.textContent = "잘못된 비밀번호 형식입니다.";
    errTextPw.style.display = "block";
    return false;
  } else {
    //정상
    errBorderPw.style.border = "0px";
    errTextPw.textContent = "";
    errTextPw.style.display = "none";
    return true;
  }
  //https://velog.io/@purplew/input-validity
}

function validateEmail() {
  const modEmailInput = emailInput.value.trim();
  if (modEmailInput === "") {
    //공란처리
    errBorderEmail.style.border = "1px solid red";
    errTextEmail.textContent = "이메일을 입력해주세요.";
    errTextEmail.style.display = "block";
    return false;
  }
  //debounce fn으로 해결
  //  else if (modEmailInput.length <= 6) {
  //   //너무 초반부터 에러메시지 안뜨게 가리기
  //}
  else if (!emailInput.checkValidity()) {
    //이메일 checkValidity 통과 실패시
    errBorderEmail.style.border = "1px solid red";
    errTextEmail.textContent = "잘못된 이메일 형식입니다.";
    errTextEmail.style.display = "block";
    return false;
  } else {
    //정상
    errBorderEmail.style.border = "0px";
    errTextEmail.textContent = "";
    errTextEmail.style.display = "none";
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
let loginCondition = false;

function updateLoginBtnState() {
  // if (validatePw() && validateEmail())
  //이렇게 하면 이메일 칠때 비밀번호도 같이 검사해버림 따로 상태만 검사
  if (isEmailValid() && isPasswordValid()) {
    loginButton.disabled = false;
    loginButton.style.backgroundColor = "#3692ff";
    loginButton.style.cursor = "pointer";
    // loginCondition = true;
  } else {
    loginButton.disabled = true;
    loginButton.style.backgroundColor = "#9ca3af";
    loginButton.style.cursor = "not-allowed";
    // loginCondition = false;
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
