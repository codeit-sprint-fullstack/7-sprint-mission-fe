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
const inputPassword = form.children[1].children[1];
const loginButton = form.children[2]


// 이메일 칸을 체크하는 함수. 비어있지 않은지, 올바른 이메일 형식인지를 검사한다.
// 비어 있거나 잘못된 형식이면 스타일에 변화가 있다(경고 문구+붉은색)
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

function validLogin() {
    if (!checkValidInput(inputEmail).length 
    && !checkValidInput(inputPassword).length) {
        return true;
    } else {
        return false;
    }
}

//로그인 버튼 활성화/비활성화
function checkLoginButton() {
    // 아이디, 비밀번호가 전부 유효한 형식인지 검사
    if (validLogin()) {
        loginButton.classList.add('login-available');
        loginButton.setAttribute('href', 'items.html')
    } else {
        if (loginButton.classList.contains('login-available')) {
            loginButton.classList.remove('login-available');
            loginButton.removeAttribute('href')
        }
    }
}


function checkAvailableLogin (event) {
    currentEmail = inputEmail.value;
    currentPassword = inputPassword.value;
    
    const user = USER_DATA.find(user =>
        user.email === currentEmail && user.password === currentPassword
    );

    if (user) {
        event.preventDefault();
        window.location.href = 'items.html';  // 다른 페이지로 이동        
    } else {
        loginButton.removeAttribute('href');
        alert("비밀번호가 일치하지 않습니다.");
    }
}


inputEmail.addEventListener('focusout', checkEmail);
inputPassword.addEventListener('focusout', checkPassword);
form.addEventListener('keyup', checkLoginButton);
form.addEventListener('submit', checkAvailableLogin)
