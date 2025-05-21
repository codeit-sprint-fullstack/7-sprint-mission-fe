document.addEventListener("DOMContentLoaded", function () {
  const emailInput = document.querySelector('input[name="userName"]');
  const nicknameInput = document.querySelector('input[name="userNickname"]');
  const passwordInput = document.querySelectorAll(
    'input[name="userPassword"]'
  )[0];
  const passwordConfirmInput = document.querySelector(
    'input[name="userPasswordConfirm"]'
  );
  const signupButton = document.getElementById("signupButton");

  const USER_DATA = [
    { email: "codeit1@codeit.com", password: "codeit101!" },
    { email: "codeit2@codeit.com", password: "codeit202!" },
    { email: "codeit3@codeit.com", password: "codeit303!" },
    { email: "codeit4@codeit.com", password: "codeit404!" },
    { email: "codeit5@codeit.com", password: "codeit505!" },
    { email: "codeit6@codeit.com", password: "codeit606!" },
  ];

  const errorMessages = {
    emailRequired: "이메일을 입력해주세요.",
    emailFormat: "잘못된 이메일 형식입니다.",
    emailTaken: "사용 중인 이메일입니다.",
    passwordRequired: "비밀번호를 입력해주세요.",
    passwordLength: "비밀번호를 8자 이상 입력해주세요.",
    passwordMismatch: "비밀번호가 일치하지 않습니다.",
  };

  function validateEmail(useModal = false) {
    const emailValue = emailInput.value.trim();
    const emailRegex = /^[\w.-]+@[\w.-]+\.\w+$/;

    if (!emailValue) {
      return showError(emailInput, errorMessages.emailRequired, useModal);
    } else if (!emailRegex.test(emailValue)) {
      return showError(emailInput, errorMessages.emailFormat, useModal);
    } else if (USER_DATA.some((user) => user.email === emailValue)) {
      if (useModal) {
        showModal(errorMessages.emailTaken);
      }
      clearError(emailInput);
      return false;
    } else {
      clearError(emailInput);
      return true;
    }
  }

  function validatePassword(useModal = false) {
    const passwordValue = passwordInput.value.trim();
    if (!passwordValue) {
      return showError(passwordInput, errorMessages.passwordRequired, useModal);
    } else if (passwordValue.length < 8) {
      return showError(passwordInput, errorMessages.passwordLength, useModal);
    } else {
      clearError(passwordInput);
      return true;
    }
  }

  function validatePasswordConfirm(useModal = false) {
    const passwordValue = passwordInput.value.trim();
    const confirmValue = passwordConfirmInput.value.trim();
    if (passwordValue !== confirmValue) {
      return showError(
        passwordConfirmInput,
        errorMessages.passwordMismatch,
        useModal
      );
    } else {
      clearError(passwordConfirmInput);
      return true;
    }
  }

  function showError(inputElement, message, useModal = false) {
    inputElement.classList.add("error");
    let errorElement = inputElement.parentNode.querySelector(".error-message");
    if (!errorElement) {
      errorElement = document.createElement("div");
      errorElement.className = "error-message";
      inputElement.parentNode.appendChild(errorElement);
    }
    errorElement.textContent = message;

    if (useModal) {
      showModal(message);
    }

    return false;
  }

  function clearError(inputElement) {
    inputElement.classList.remove("error");
    let errorElement = inputElement.parentNode.querySelector(".error-message");
    if (errorElement) {
      errorElement.textContent = "";
    }
  }

  function checkFormValidity() {
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isPasswordConfirmValid = validatePasswordConfirm();
    signupButton.disabled = !(
      isEmailValid &&
      isPasswordValid &&
      isPasswordConfirmValid
    );
    return signupButton.disabled === false;
  }

  emailInput.addEventListener("blur", () => validateEmail(true));
  passwordInput.addEventListener("blur", () => validatePassword(true));
  passwordConfirmInput.addEventListener("blur", () =>
    validatePasswordConfirm(true)
  );

  emailInput.addEventListener("input", checkFormValidity);
  passwordInput.addEventListener("input", checkFormValidity);
  passwordConfirmInput.addEventListener("input", checkFormValidity);

  signupButton.addEventListener("click", function (e) {
    e.preventDefault();
    if (checkFormValidity()) {
      showModal("회원가입이 완료되었습니다.", () => {
        window.location.href = "/login.html";
      });
    }
  });

  document.querySelectorAll(".btn-visibility").forEach((button) => {
    const pwdInput = button
      .closest(".input-wrapper")
      .querySelector('input[type="password"], input[type="text"]');
    const icon = button.querySelector("img");

    button.addEventListener("click", function () {
      const isHidden = pwdInput.type === "password";
      pwdInput.type = isHidden ? "text" : "password";
      icon.src = isHidden
        ? "https://unrivaled-beignet-ea3af4.netlify.app/assets/btn_visibility_on_24px.svg"
        : "btn_visibility_on_24px.png";
    });
  });

  function showModal(message, callback = null) {
    const modal = document.getElementById("signupModal");
    const modalMessage = document.getElementById("signupModalMessage");
    const confirmButton = document.getElementById("signupModalConfirmButton");

    modalMessage.textContent = message;
    modal.classList.remove("hidden");
    modal.style.display = "flex";

    confirmButton.onclick = function () {
      modal.classList.add("hidden");
      modal.style.display = "none";
      if (callback) callback();
    };
  }
});
