const emailInput = document.getElementById("formInputEmail");
const passwordInput = document.getElementById("formInputPassword");
const passwordConfirmInput = document.getElementById(
  "formInputConfirmPassword"
);
const nicknameInput = document.getElementById("formInputNickname");

const loginButton = document.getElementById("loginButton");
const togglePw = document.querySelector(".form-field-passVis");
const togglePwImg = document.getElementById("passVisImg");
const errorBorder = document.getElementsByClassName("error-border");
const errorText = document.getElementsByClassName("error-text");
//error-border[0] - email
//error-border[1] - nickname
//error-border[1] - pw
//error-border[2] - pwRepeat

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
    window.location.href = "index.html"; //추후 items.html로 이동
  }
  loginStatus = false;
});

const USER_DATA = [
  { email: "codeit1@codeit.com", password: "codeit101!" },
  { email: "codeit2@codeit.com", password: "codeit202!" },
  { email: "codeit3@codeit.com", password: "codeit303!" },
  { email: "codeit4@codeit.com", password: "codeit404!" },
  { email: "codeit5@codeit.com", password: "codeit505!" },
  { email: "codeit6@codeit.com", password: "codeit606!" },
];

// function checkLoginInfo() {
//   const emailValue = emailInput.value;
//   const pwValue = passwordInput.value;
//   const loginValidity = USER_DATA.find((el) => {
//     return el.email == emailValue && el.password == pwValue;
//   });
//   // console.log("loginValidity콘솔 : ", loginValidity);
//   return loginValidity
//     ? `${emailValue} 로그인 성공`
//     : "아이디 혹은 비밀번호가 일치하지 않습니다.";
// }
function checkSignUpInfo() {
  const modEmailValue = emailInput.value.trim();

  const signupValidity = USER_DATA.some((user) => user.email === modEmailValue);
  return signupValidity
    ? `${modEmailValue}은(는) 사용 중인 이메일 입니다.`
    : "회원가입이 완료되었습니다.";
  // if (signupValidity) {
  //   showModal(`${modEmailValue}은(는) 사용 중인 이메일입니다.`);
  //   loginStatus = false;
  // } else {
  //   showModal("회원가입이 완료되었습니다.");
  //   loginStatus = true;
  // }
}

loginButton.addEventListener("click", () => {
  // alert(checkLoginInfo());
  const msg = checkSignUpInfo();
  showModal(msg);
  loginStatus = msg.includes("완료") ? true : false;
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

function validateConfirmPw() {
  const pwValue = passwordInput.value.trim();
  const pwRepValue = passwordConfirmInput.value.trim();

  if (pwRepValue === "") {
    errorBorder[3].style.border = "1px solid red";
    errorText[3].textContent = "비밀번호 확인을 위해 입력해주세요.";
    errorText[3].style.display = "block";
    return false;
  } else if (pwValue !== pwRepValue) {
    errorBorder[3].style.border = "1px solid red";
    errorText[3].textContent = "비밀번호가 일치하지 않습니다.";
    errorText[3].style.display = "block";
    return false;
  } else {
    errorBorder[3].style.border = "0px";
    errorText[3].textContent = "";
    errorText[3].style.display = "none";
    return true;
  }
}

function isConfirmPwValid() {
  return (
    passwordInput.value.trim() === passwordConfirmInput.value.trim() &&
    passwordConfirmInput.value.trim() !== ""
  );
}

function validatePw() {
  const modPwInput = passwordInput.value.trim();
  if (modPwInput === "") {
    //공란처리
    errorBorder[2].style.border = "1px solid red";
    errorText[2].textContent = "비밀번호를 입력해주세요.";
    errorText[2].style.display = "block";
    return false;
  } else if (modPwInput.length < 8) {
    //비번 길이 검사
    errorBorder[2].style.border = "1px solid red";
    errorText[2].textContent = "비밀번호를 8자 이상 입력해주세요";
    errorText[2].style.display = "block";
    return false;
  } else if (!passwordInput.checkValidity()) {
    //pw checkValidity 통과 실패시
    errorBorder[2].style.border = "1px solid red";
    errorText[2].textContent = "잘못된 비밀번호 형식입니다.";
    errorText[2].style.display = "block";
    return false;
  } else {
    //정상
    errorBorder[2].style.border = "0px";
    errorText[2].textContent = "";
    errorText[2].style.display = "none";
    return true;
  }
}

function validateNickName() {
  const modNickName = nicknameInput.value.trim();
  if (modNickName === "") {
    errorBorder[1].style.border = "1px solid red";
    errorText[1].textContent = "닉네임을 입력해주세요.";
    errorText[1].style.display = "block";
    return false;
  } else if (modNickName.length < 2) {
    errorBorder[1].style.border = "1px solid red";
    errorText[1].textContent = "닉네임은 2자 이상이어야 합니다.";
    errorText[1].style.display = "block";
    return false;
  } else if (modNickName.length >= 13) {
    errorBorder[1].style.border = "1px solid red";
    errorText[1].textContent = "닉네임은 12자 이하여야 합니다.";
    errorText[1].style.display = "block";
    return false;
  } else {
    errorBorder[1].style.border = "0px";
    errorText[1].textContent = "";
    errorText[1].style.display = "none";
    return true;
  }
}
function isNickNameValid() {
  const modNickName = nicknameInput.value.trim();
  return (
    modNickName !== "" && modNickName.length >= 2 && modNickName.length <= 12
  );
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
let loginCondition = false;

function updateLoginBtnState() {
  // if (validatePw() && validateEmail())
  //이렇게 하면 이메일 칠때 비밀번호도 같이 검사해버림 따로 상태만 검사
  if (
    isEmailValid() &&
    isPasswordValid() &&
    isConfirmPwValid() &&
    isNickNameValid()
  ) {
    loginButton.disabled = false;
    loginButton.style.backgroundColor = "#3692ff";
    loginButton.style.cursor = "pointer";
    loginCondition = true;
  } else {
    loginButton.disabled = true;
    loginButton.style.backgroundColor = "#9ca3af";
    loginButton.style.cursor = "not-allowed";
    loginCondition = false;
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
const debValPwConfirm = debounce(validateConfirmPw, 500);
const debValNickName = debounce(validateNickName, 500);

let eventArr = ["input", "blur"];
const validInputs = [
  { type: emailInput, validator: debValEmail },
  { type: passwordInput, validator: debValPw },
  { type: passwordConfirmInput, validator: debValPwConfirm },
  { type: nicknameInput, validator: debValNickName },
];

validInputs.forEach(({ type, validator }) => {
  eventArr.forEach((evt) => {
    type.addEventListener(evt, () => {
      validator();
      updateLoginBtnState();
    });
  });
});
