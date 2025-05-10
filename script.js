const inputEmail = document.querySelector('#email');
const inputPassword = document.querySelector('#password');
const form = document.querySelector('form');


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

// 로그인 버튼 활성화
function loginAvailable() {
    if (!checkBlank(inputEmail) && !checkEmailType(inputEmail) && !checkBlank(inputPassword) && !checkLength(inputPassword)) {
        //넷 다 해당되면 이메일과 비밀번호 모두 유효한 형태로 입력된 상황
        return true;
    } else {
        return false;
    }
}

inputEmail.addEventListener('focusout', checkEmail);
inputPassword.addEventListener('focusout', checkPassword);
