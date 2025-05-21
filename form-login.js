const emailInput = document.querySelector('input[name="userName"]');
const passwordInput = document.querySelector('input[name="userPassword"]');
const loginButton = document.getElementById("loginButton");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

function validateEmail() {
  const email = emailInput.value.trim();
  if (!email) {
    emailError.textContent = "이메일을 입력해주세요.";
    emailInput.classList.add("error");
    return false;
  } else if (!/^[\w.-]+@[\w.-]+\.\w+$/.test(email)) {
    emailError.textContent = "잘못된 이메일 형식입니다.";
    emailInput.classList.add("error");
    return false;
  } else {
    emailError.textContent = "";
    emailInput.classList.remove("error");
    return true;
  }
}

function validatePassword() {
  const password = passwordInput.value.trim();
  if (!password) {
    passwordError.textContent = "비밀번호를 입력해주세요.";
    passwordInput.classList.add("error");
    return false;
  } else if (password.length < 8) {
    passwordError.textContent = "비밀번호를 8자 이상 입력해주세요.";
    passwordInput.classList.add("error");
    return false;
  } else {
    passwordError.textContent = "";
    passwordInput.classList.remove("error");
    return true;
  }
}

function checkFormValidity() {
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();
  loginButton.disabled = !(isEmailValid && isPasswordValid);
}

emailInput.addEventListener("blur", () => {
  validateEmail();
  checkFormValidity();
});

passwordInput.addEventListener("blur", () => {
  validatePassword();
  checkFormValidity();
});

emailInput.addEventListener("input", checkFormValidity);
passwordInput.addEventListener("input", checkFormValidity);

window.addEventListener("DOMContentLoaded", () => {
  loginButton.disabled = true;
});

const USER_DATA = [
  { email: "codeit1@codeit.com", password: "codeit101!" },
  { email: "codeit2@codeit.com", password: "codeit202!" },
  { email: "codeit3@codeit.com", password: "codeit303!" },
  { email: "codeit4@codeit.com", password: "codeit404!" },
  { email: "codeit5@codeit.com", password: "codeit505!" },
  { email: "codeit6@codeit.com", password: "codeit606!" },
];

const modal = document.getElementById("errorModal");
const modalMessage = document.getElementById("modalMessage");
const closeModal = document.getElementById("closeModal");

loginButton.addEventListener("click", function (e) {
  e.preventDefault();

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  const user = USER_DATA.find((user) => user.email === email);

  if (!user || user.password !== password) {
    showModal("아이디 또는 비밀번호가 일치하지 않습니다.");
  } else {
    window.location.href = "/items.html";
  }
});

function showModal(message) {
  const modal = document.getElementById("errorModal");
  const modalMessage = document.getElementById("modalMessage");
  const confirmButton = document.getElementById("modalConfirmButton");

  modalMessage.textContent = message;
  modal.style.display = "flex";

  confirmButton.onclick = function () {
    modal.style.display = "none";
  };
}

document.querySelectorAll(".btn-visibility").forEach((button) => {
  const passwordInput = button
    .closest(".input-wrapper")
    .querySelector('input[type="password"], input[type="text"]');
  const toggleIcon = button.querySelector("img");

  button.addEventListener("click", function () {
    const isHidden = passwordInput.type === "password";
    passwordInput.type = isHidden ? "text" : "password";
    toggleIcon.src = isHidden
      ? "https://unrivaled-beignet-ea3af4.netlify.app/assets/btn_visibility_on_24px.svg" // 보이기
      : "btn_visibility_on_24px.png"; // 숨기기
  });
});
