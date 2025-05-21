import { checkBlank, checkEmailType, checkLength, resetWrongInput, changeWrongInput, checkValidInput} from "./functions.js";

const USER_DATA = [
    { email: 'codeit1@codeit.com', password: "codeit101!" },
    { email: 'codeit2@codeit.com', password: "codeit202!" },
    { email: 'codeit3@codeit.com', password: "codeit303!" },
    { email: 'codeit4@codeit.com', password: "codeit404!" },
    { email: 'codeit5@codeit.com', password: "codeit505!" },
    { email: 'codeit6@codeit.com', password: "codeit606!" },
];

const form = document.querySelector('form');
const inputEmail = form.children[0].children[1];
const inputPassword = form.children[2].children[1];
const inputPasswordAgain = form.children[3].children[1];
const signupButton = form.children[4]


//이메일 칸 체크
function checkEmail() {
    //스타일 초기화
    resetWrongInput(inputEmail);

    //필요시 스타일 변화
    changeWrongInput(inputEmail);
}


//패스워드 칸 체크
function checkPassword() {
    //스타일 초기화
    resetWrongInput(inputPassword);

    //필요시 스타일 변화
    changeWrongInput(inputPassword);
}

//패스워드 확인 칸 체크 
function checkPasswordAgain() {
    //스타일 초기화
    resetWrongInput(inputPasswordAgain);

    //필요시 스타일 변화
    changeWrongInput(inputPasswordAgain);
}

//이렇게 연산자 여러개를 같이 사용할 때 엔터로 줄을 나눠주어도 괜찮나요? 가독성 때문에요.
function validSignup() {
    if (!checkValidInput(inputEmail).length 
    && !checkValidInput(inputPassword).length 
    && !checkValidInput(inputPasswordAgain).length) {
        return true;
    } else {
        return false
    }
}

//회원가입 버튼 활성화/비활성화
function checkSignupButton() {
    // 아이디, 비밀번호가 전부 유효한 형식인지 검사
    if (validSignup()) {
        signupButton.classList.add('login-available');
        signupButton.setAttribute('href', 'items.html')
    } else {
        if (signupButton.classList.contains('login-available')) {
            signupButton.classList.remove('login-available');
            signupButton.removeAttribute('href')
        }
    }
}


function checkAvailableSignup () {
    currentEmail = inputEmail.value;

    const user = USER_DATA.find(user =>
        user.email === currentEmail
    );

    if (user) {
        loginButton.removeAttribute('href');
        alert('사용 중인 이메일입니다');
    } else {
        event.preventDefault();
        alert('가입 성공');
        window.location.href = 'login.html';  // 다른 페이지로 이동      
    }
}


inputEmail.addEventListener('focusout', checkEmail);
inputPassword.addEventListener('focusout', checkPassword);
inputPasswordAgain.addEventListener('focusout', checkPasswordAgain);
form.addEventListener('keyup', checkSignupButton);
form.addEventListener('submit', checkAvailableSignup);