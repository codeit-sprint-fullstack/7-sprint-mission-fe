const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const passwordCheckInput = document.querySelector('#password_check');
const toggleBtns = document.querySelectorAll('.btn-visible');

function showError(el, msg){
    el.classList.add('input-error');
    const parent = el.parentElement;
    if (parent.querySelector('.txt-help')) {
        return;
    }
    const errorEl = document.createElement('p')
    errorEl.classList.add('txt-help', 'error');
    errorEl.textContent = msg;
    parent.appendChild(errorEl)
}
function clearError(el){
    el.classList.remove('input-error');

    const parent = el.parentElement;
    const errorEl = parent.querySelector('.txt-help');
    if (errorEl) {
        parent.removeChild(errorEl);
    }
}

function emailValidate(){
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailInput.value) {
        showError(emailInput, '이메일을 입력해주세요.');
    }else if (!emailRegex.test(emailInput.value)) {
        showError(emailInput, '잘못된 이메일 형식입니다.');
    } else{
        clearError(emailInput);
    }
}
function pwValidate(){
    if (!passwordInput.value) {
        showError(passwordInput, '비밀번호를 입력해주세요.');
    }else if (passwordInput.value.length < 8) {
        showError(passwordInput, '비밀번호는 8자 이상이어야 합니다.');
    } else {
        clearError(passwordInput);
    }
}

function pwCheckValidate(e){
    if(e.target.value !== passwordInput.value){
        showError(passwordCheckInput, '비밀번호가 일치하지 않습니다.');
    } else{
        clearError(e.target);
    }
}

emailInput.addEventListener('blur', emailValidate);
emailInput.addEventListener('focus', () => clearError(emailInput));
passwordInput.addEventListener('blur', pwValidate);
passwordInput.addEventListener('input', pwValidate);
if (passwordCheckInput) {
    passwordCheckInput.addEventListener('blur', pwCheckValidate);
    passwordCheckInput.addEventListener('input', pwCheckValidate);
    passwordCheckInput.addEventListener('focus', () => clearError(passwordCheckInput));
}

toggleBtns.forEach((toggleBtn) => {
    toggleBtn.addEventListener('click', () => {
        const $input = toggleBtn.parentElement.querySelector('input');
        const isPassword = $input.type === 'password';
        $input.type = isPassword ? 'text' : 'password';
        
        const icon = toggleBtn.querySelector('img');
        icon.src = isPassword ? '../../img/common/ico_visibility_on.png' : '../../img/common/ico_visibility_off.png';
    });
})