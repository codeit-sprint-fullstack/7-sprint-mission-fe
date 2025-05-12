//에러 메시지 출력 함수
function showError(inputElement, errorElement, message) {
    inputElement.classList.add('error')
    errorElement.textContent = message;
    errorElement.classList.remove('hide');
}

// 에러메세지 숨김 함수
function hideError(inputElement, errorElement) {
    inputElement.classList.remove('error');
    errorElement.classList.add('hide');
}

// 문자열 길이 비교 함수 : 최소 길이 조건 확인시 사용
function inputLength(value, number) {
    return value.length < number;
}
// 이메일 정규 표현식
const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// 이메일 유효성 검사를 위한 이메일 input과 에러메세지 요소
const emailInput = document.querySelector('#user-email');
const emailErrorMessage = document.querySelector('[data-error-for="email"]');

// 이메일 유효성 검사
emailInput.addEventListener('blur', function() {
    const email = emailInput.value;

    if(email === ''){
        showError(emailInput, emailErrorMessage, '이메일을 입력해주세요.');
        return;
    }

    if(!emailReg.test(email)) {
        showError(emailInput, emailErrorMessage, '잘못된 이메일 형식입니다.');
        return;
    } 
    
    hideError(emailInput, emailErrorMessage);
    
});

// 닉네임 유효성 검사를 위한 닉네임 input과 에러메세지 요소
const nicknameInput = document.querySelector('#user-nickname');
const nicknameErrorMessage = document.querySelector('[data-error-for="nickname"]');

// 닉네임 유효성 검사
nicknameInput.addEventListener('blur', function() {
    const nickname = nicknameInput.value;

    if(nickname === ''){
        showError(nicknameInput, nicknameErrorMessage, '닉네임을 입력해주세요.');
    } else {
        hideError(nicknameInput,nicknameErrorMessage);
    }
});

// 비밀번호 정규 표현식(소문자 + 숫자 + 특수문자 + 8자 이상)
const strongPasswordReg = /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[a-z\d!@#$%^&*]{8,}$/i;

// 비밀번호 유효성 검사를 위한 비밀번호 input과 에러메세지 요소
const passwordInput = document.querySelector('#user-password');
const passwordErrorMessage = document.querySelector('[data-error-for="password"]');

// 비밀번호 유효성 검사
passwordInput.addEventListener('blur', function() {
    const password = passwordInput.value;
    
    if (password === '') {
        showError(passwordInput, passwordErrorMessage, '비밀번호를 입력해주세요.');
        return;
      }
    
      if (password.includes(' ')) {
        showError(passwordInput, passwordErrorMessage, '비밀번호에는 공백을 포함할 수 없습니다.');
        return;
      }
    
      if (inputLength(password, 8)) {
        showError(passwordInput, passwordErrorMessage, '비밀번호 8자 이상 입력해주세요.');
        return;
      }
    
      if (!strongPasswordReg.test(password)) {
        showError(passwordInput, passwordErrorMessage, '소문자, 숫자, 특수문자를 포함해야 합니다.');
        return;
      }
    
      hideError(passwordInput, passwordErrorMessage);
});

// 비밀번호확인 유효성검사를 위한 비밀번호확인 input과 에러메세지 요소
const checkPasswordInput = document.querySelector('#check-user-password');
const checkPasswordErrorMessage = document.querySelector('[data-error-for="check-password"]');

// 입력된 비밀번호의 일치 여부를 확인하는 함수
function isMatch (password, checkPassword) {
    return password === checkPassword;
  }

  // 비밀번호 확인 유효성 검사
checkPasswordInput.addEventListener('blur', function() {
    const password = passwordInput.value;
    const checkPassword = checkPasswordInput.value;
    
    if (!isMatch(password, checkPassword)) {
        showError(checkPasswordInput, checkPasswordErrorMessage, '비밀번호가 일치하지 않습니다.');
    } else {
        hideError(checkPasswordInput, checkPasswordErrorMessage);
    }
});

// 회원가입 버튼 요소 선택
const signupBtn = document.querySelector('.form-btn');

// 회원가입 조건을 실시간으로 검사하여 활성화/비활성화 하는 함수
function validateSignupConditions (){
    const email = emailInput.value.trim();
    const nickname = nicknameInput.value.trim();
    const password = passwordInput.value;
    const checkPassword = checkPasswordInput.value;

    // 에러를 가진 요소가 하나 이상일 경우 true 한개도 없을경우 false
    const hasError = document.querySelectorAll('.error').length > 0;
    const allFieldsFilled = email && nickname && password && checkPassword;
    const passwordMatch = isMatch(password, checkPassword);

    if(allFieldsFilled && !hasError && passwordMatch) {
        signupBtn.disabled = false;
        signupBtn.classList.add('active');
    }else {
        signupBtn.disabled = true;
        signupBtn.classList.remove('active');
    }
}

// 4개의 입력필드에 input이벤트가 발생할때 마다 validSignupConditions 함수를 호출해서 조건 검사
[emailInput, nicknameInput, passwordInput, checkPasswordInput].forEach(input => {
    input.addEventListener('input', validateSignupConditions)
});

// 회원가입 버튼 클릭 시 실행되는 함수
function handleSignup() {
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    //이메일 중복 검사
    const isDuplicate = USER_DATA.some(user => user.email === email);

    if (isDuplicate) {
        alert('사용중인 이메일입니다.');
        return;
    }

    const newUser = {
        email: email,
        password: password
    };

    USER_DATA.push(newUser);
    alert('회원가입이 완료되었습니다.');

    window.location.href = '../pages/login.html'
}

// 회원가입 버튼에 클릭 이벤트 연결
signupBtn.addEventListener('click',handleSignup)