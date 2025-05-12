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


//해당 element의 value가 비었는지 체크 (비어있을 때 true)
function checkBlank(element) {
    if (element.value === '') {
        return true;
    } else {
        return false;
    }
}

//해당 element의 value가 맞는 이메일 형식인지 체크 (제대로 된 형식이면 false)
function checkEmailType(element) {
    // 이메일이 3글자 이상인지, 맨 끝과 마지막 글자를 제외하고 @가 포함되어 있는지 확인
    if (element.value.length >= 3 && element.value.slice(1,-1).includes('@')) {
        return false;
    } else {
        return true;
    }
}

//해당 element가 8글자 이상인지 확인 (8글자 이상이면 false)
function checkLength(element) {
    if (element.value.length >= 8) {
        return false;
    } else {
        return true;
    }
}

//이메일 칸 체크
function checkEmail() {
    //새롭게 입력할 때는 기존의 wrong-red이 있다면 전부 삭제
    // 그 뒤의 p문구도 중복을 막기 위해 삭제
    if (inputEmail.classList.contains('wrong-input')) {
        inputEmail.classList.remove('wrong-input');
        inputEmail.nextElementSibling.remove();
    }


    if (checkBlank(inputEmail)) {
        //이메일이 빈칸일 때
        inputEmail.classList.add('wrong-input');
        const noPasswordText = document.createElement('p');
        noPasswordText.textContent = '이메일을 입력해주세요.'
        noPasswordText.setAttribute('class', 'wrong-red-text')
        inputEmail.after(noPasswordText);
        

    } else {
        // 빈칸은 아니나 잘못된 형식일 때
        if (checkEmailType(inputEmail)) {
            inputEmail.classList.add('wrong-input');
            const wrongEmailText = document.createElement('p');
            wrongEmailText.textContent = '잘못된 이메일 형식입니다.'
            wrongEmailText.setAttribute('class', 'wrong-red-text')
            inputEmail.after(wrongEmailText);
        }

    }
}

//패스워드 칸 체크
function checkPassword() {
    //새롭게 입력할 때는 기존의 wrong-red이 있다면 전부 삭제
    // 그 뒤의 p문구도 중복을 막기 위해 삭제
    if (inputPassword.classList.contains('wrong-input')) {
        inputPassword.classList.remove('wrong-input');
        inputPassword.nextElementSibling.remove();
    }


    if (checkBlank(inputPassword)) {
        //빈칸일 때
        inputPassword.classList.add('wrong-input');
        const noPasswordText = document.createElement('p');
        noPasswordText.textContent = '비밀번호를 입력해주세요.'
        noPasswordText.setAttribute('class', 'wrong-red-text')
        inputPassword.after(noPasswordText);
        

    } else {
        // 8자 이하일 때
        if (checkLength(inputPassword)) {
            inputPassword.classList.add('wrong-input');
            const wrongPasswordText = document.createElement('p');
            wrongPasswordText.textContent = '비밀번호를 8자 이상 입력해주세요.'
            wrongPasswordText.setAttribute('class', 'wrong-red-text')
            inputPassword.after(wrongPasswordText);
        }

    }
}

//패스워드 확인 칸 체크 
function checkPasswordAgain() {
    //새롭게 입력할 때는 기존의 wrong-red이 있다면 전부 삭제
    // 그 뒤의 p문구도 중복을 막기 위해 삭제
    if (inputPasswordAgain.classList.contains('wrong-input')) {
        inputPasswordAgain.classList.remove('wrong-input');
        inputPasswordAgain.nextElementSibling.remove();
    }

    if (inputPassword.value !== inputPasswordAgain.value) {
        //일치하지 않을 때
        inputPasswordAgain.classList.add('wrong-input');
        const wrongPasswordAgainText = document.createElement('p');
        wrongPasswordAgainText.textContent = '비밀번호와 일치하지 않습니다.'
        wrongPasswordAgainText.setAttribute('class', 'wrong-red-text')
        inputPasswordAgain.after(wrongPasswordAgainText);    
    }
}

//회원가입 버튼 활성화/비활성화
function checkSignupButton() {
    // 아이디, 비밀번호가 전부 유효한 형식인지 검사
    if (!checkBlank(inputEmail) && !checkEmailType(inputEmail) && !checkBlank(inputPassword) && !checkLength(inputPassword) && inputPassword.value === inputPasswordAgain.value) {
        signupButton.classList.add('login-available');
        signupButton.setAttribute('href', 'items.html')
    } else {
        if (signupButton.classList.contains('login-available')) {
            signupButton.classList.remove('login-available');
            signupButton.removeAttribute('href')
        }
    }
}

//아이디가 db에 있는지 확인
//이 함수를 멘토님이라면 어떻게 작성했을지 질문(뭐가 제일 계산량이 적은 알고리즘일지..)
idList = []
pwList = []

for (idpw of USER_DATA) {
    idList.push(idpw.email);
    pwList.push(idpw.password);
}


function checkAvailableSignup () {
    event.preventDefault();
    if (idList.includes(inputEmail.value)) {
        alert('사용 중인 이메일입니다');
    } else {
        window.location.href = 'login.html';  // 다른 페이지로 이동
    }
}


inputEmail.addEventListener('focusout', checkEmail);
inputPassword.addEventListener('focusout', checkPassword);
inputPasswordAgain.addEventListener('focusout', checkPasswordAgain);
form.addEventListener('keyup', checkSignupButton);
form.addEventListener('submit', checkAvailableSignup);