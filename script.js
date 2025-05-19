const USER_DATA = [
    { email: 'codeit1@codeit.com', password: "codeit101!" },
    { email: 'codeit2@codeit.com', password: "codeit202!" },
    { email: 'codeit3@codeit.com', password: "codeit303!" },
    { email: 'codeit4@codeit.com', password: "codeit404!" },
    { email: 'codeit5@codeit.com', password: "codeit505!" },
    { email: 'codeit6@codeit.com', password: "codeit606!" },
];

document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("emailError");
  const passwordInput = document.getElementById("password");
  const passwordError = document.getElementById("passwordError");
  const loginButton = document.querySelector(".login-form button");
  const loginForm = document.querySelector(".login-form");

  // Function to check if the form is valid
  function checkFormValidity() {
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Check if there are any errors or empty inputs
    if (
      email === "" ||
      emailError.style.display === "block" ||
      password === "" ||
      passwordError.style.display === "block"
    ) {
      loginButton.disabled = true; // Disable the button
    } else {
      loginButton.disabled = false; // Enable the button
    }
  }

  // Validate email on blur
  emailInput.addEventListener("blur", function () {
    const email = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 기본 이메일 정규식

    if (email === "") {
      emailInput.classList.add("input-error");
      emailError.textContent = "이메일을 입력해주세요.";
      emailError.style.display = "block";
    } else if (!emailPattern.test(email)) {
      emailInput.classList.add("input-error");
      emailError.textContent = "잘못된 이메일 형식입니다.";
      emailError.style.display = "block";
    } else {
      emailInput.classList.remove("input-error");
      emailError.style.display = "none";
    }

    checkFormValidity(); // Check form validity after validation
  });

  // Validate password on blur
  passwordInput.addEventListener("blur", function () {
    const password = passwordInput.value.trim();

    if (password === "") {
      passwordInput.classList.add("input-error");
      passwordError.textContent = "비밀번호를 입력해주세요.";
      passwordError.style.display = "block";
    } else if (password.length < 8) {
      passwordInput.classList.add("input-error");
      passwordError.textContent = "비밀번호를 8자 이상 입력해주세요.";
      passwordError.style.display = "block";
    } else {
      passwordInput.classList.remove("input-error");
      passwordError.style.display = "none";
    }

    checkFormValidity(); // Check form validity after validation
  });

  // Prevent form submission and validate credentials
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Check if the email exists in USER_DATA
    const user = USER_DATA.find(user => user.email === email);

    if (!user) {
      alert("입력한 이메일이 존재하지 않습니다."); // Email not found
    } else if (user.password !== password) {
      alert("비밀번호가 일치하지 않습니다."); // Password mismatch
    } else {
      // Redirect to /items if the credentials are valid
      window.location.href = "/items.html";
    }
  });

  // Disable the button initially
  loginButton.disabled = true;

  // Check form validity on input
  emailInput.addEventListener("input", checkFormValidity);
  passwordInput.addEventListener("input", checkFormValidity);
});