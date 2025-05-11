//에러 메시지 출력 함수
function showError(inputElement, errorElement, message) {
    inputElement.classList.add('error');
    errorElement.textContent = message;
    errorElement.classList.remove('hide');
}

// 에러메세지 숨김 함수
function hideError(inputElement, errorElement) {
    inputElement.classList.remove('error');
    errorElement.classList.add('hide')
}

// 이메일 정규 표현식
const emailReg = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// 이메일 input 필드와 해당 에러 메시지 DOM 요소 선택
const emailInput = document.querySelector('#user-email');
const emailErrorMessage = document.querySelector('[data-error-for="email"]');

// 이메일 유효성 검사
emailInput.addEventListener('blur',function() {
    const email = emailInput.value.trim();
     
    if(email===''){
        showError(emailInput, emailErrorMessage, "이메일을 입력해 주세요.");
        return;
    }
    
    if(!emailReg.test(email)) {
        showError(emailInput, emailErrorMessage, '잘못된 이메일 형식입니다.');
        return;
    }
    
    hideError(emailInput,emailErrorMessage);
});
