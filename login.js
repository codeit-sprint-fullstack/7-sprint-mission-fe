const emailInput = document.getElementById("formInputEmail");
const passwordInput = document.getElementById("formInputPassword");
const loginButton = document.getElementById("loginButton");

function checkEmailPwValidity() {
  if (emailInput.checkValidity() && passwordInput.checkValidity()) {
    console.log("둘다유효");
    loginButton.disabled = false;
    loginButton.style.backgroundColor = "#3692ff";
    loginButton.style.cursor = "pointer";
  } else {
    console.log("이메일 혹은 비밀번호가 형식에 맞지 않습니다.");
    loginButton.disabled = true;
    loginButton.style.backgroundColor = "#9ca3af";
    loginButton.style.cursor = "not-allowed";
  }
}

emailInput.addEventListener("input", checkEmailPwValidity);
passwordInput.addEventListener("input", checkEmailPwValidity);

checkEmailPwValidity();
