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

// 문자열 길이 비교 함수 : 최소 길이 조건 확인시 사용
function inputLength(value, number){
    return value.length < number
}

// 비밀번호 정규 표현식(소문자 + 숫자 + 특수문자 + 8자 이상)
const strongPasswordReg = /^(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*])[a-z\d!@#$%^&*]{8,}$/i;

// 비밀번호 input 필드와 해당 에러 메시지 DOM 요소 선택
const passwordInput = document.querySelector('#user-password');
const passwordErrorMessage = document.querySelector('[data-error-for="password"]');

// 비밀번호 유효성 검사
passwordInput.addEventListener('blur', function(){
    const password = passwordInput.value;

    if(password === ''){
        showError(passwordInput, passwordErrorMessage,"비밀번호를 입력해주세요.");
        return;
    }

    if(inputLength(password, 8)){
        showError(passwordInput, passwordErrorMessage, "비밀번호를 8자 이상 입력해주세요.");
        return;
    }

    if (password.includes(' ')) {
        showError(passwordInput, passwordErrorMessage, '비밀번호에는 공백을 포함할 수 없습니다.');
        return;
      }

    if(!strongPasswordReg.test(password)){
        showError(passwordInput, passwordErrorMessage, '소문자, 숫자, 특수문자를 포함해야 합니다.');
        return;
    }

    hideError(passwordInput,passwordErrorMessage);
});

const loginBtn = document.querySelector('.form-btn');

function validateLoginConditions(){
    const email = emailInput.value.trim();
    const password = passwordInput.value;

    const emailValid = emailReg.test(email);
    const passwordValid = strongPasswordReg.test(password);
    const allFieldsFilled = email && password;
    
    if (emailValid && passwordValid && allFieldsFilled) {
        loginBtn.disabled = false;
        loginBtn.classList.add('active');
    } else {
        loginBtn.disabled = true;
        loginBtn.classList.remove('active');
    }
    
}

// 2개의 입력필드에 input이벤트가 발생할때 마다 validLoginConditions 함수를 호출해서 조건 검사
[emailInput, passwordInput].forEach(input => {
    input.addEventListener('input', validateLoginConditions)
});

// 로그인 버튼 클릭 시 실행되는 함수
function handleLogin(e) {
    e.preventDefault();
    
    const email = emailInput.value;
    const password = passwordInput.value;

    const isDuplicate = USER_DATA.some(user => 
        user.email === email && user.password === password
    );
    
    if(isDuplicate){
        window.location.href = '../pages/items.html'
    } else {
        alert("비밀번호가 일치하지 않습니다.");
    }
}

//로그인버튼에 클릭 이벤트 연결
loginBtn.addEventListener('click', handleLogin);