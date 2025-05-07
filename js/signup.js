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

//비밀번호 정규 표현식(소문자 + 숫자 + 특수문자 + 8자 이상)
const strongPasswordReg = /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[a-z\d!@#$%^&*]{8,}$/i;

const passwordInput = document.getElementById('user-password');
const passwordErrorMessage = document.querySelector('[data-error-for="password"]');

passwordInput.addEventListener('blur', function() {
    const password = passwordInput.value;

    if (password === '') {
        showError(passwordInput, passwordErrorMessage, '비밀번호를 입력해주세요');
        return;
      }
    
      if (password.includes(' ')) {
        showError(passwordInput, passwordErrorMessage, '비밀번호에는 공백을 포함할 수 없습니다.');
        return;
      }
    
      if (inputLength(password, 8)) {
        showError(passwordInput, passwordErrorMessage, '비밀번호 8자 이상 입력해주세요');
        return;
      }
    
      if (!strongPasswordReg.test(password)) {
        showError(passwordInput, passwordErrorMessage, '소문자, 숫자, 특수문자를 포함해야 합니다.');
        return;
      }
    
      hideError(passwordInput, passwordErrorMessage);
});