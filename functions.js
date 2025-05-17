// 중복되는 함수들을 해당 파일에 정리

//element가 비어있는지 체크하는 함수. 비어있다면 true를 반환한다.
function checkBlank(element) {
    if (element.value.trim() === '') {
        return true;
    } else {
        return false;
    }
}

//해당 element의 value가 맞는 이메일 형식인지 체크 (제대로 된 형식이면 false)
function checkEmailType(element) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(element.value.trim())) {
        return false;
    } else {
        return true;
    }
}

//해당 element가 8글자 이상인지 확인 (8글자 이상이면 false)
function checkLength(element) {
    if (element.value.trim().length >= 8) {
        return false;
    } else {
        return true;
    }
}

//두 개의 element가 일치하는지 확인 (일치하면 false. 일치하지 않아야 true)
function checkMismatch(element, standard) {
    if (element.value === standard.value) {
        return false;
    } else {
        return true;
    }
}

//경고 문구가 있는 경우, 스타일 초기화 함수
function resetWrongInput(inputElement) {
    if (inputElement.classList.contains('wrong-input')) {
        inputElement.classList.remove('wrong-input');
        inputElement.nextElementSibling.remove();
    }    
}


// 잘못된 양식인 경우 스타일 변화
function changeWrongInput (inputElement) {
    const data = checkValidInput(inputElement);
    if (data.length >= 1) {
        inputElement.classList.add('wrong-input');
        const warningText = document.createElement('p');      
        warningText.textContent = data[2];
        warningText.setAttribute('class', 'wrong-red-text')
        inputElement.after(warningText);    
    }
}


// 아이디 혹은 비밀번호를 입력했을 때, 제대로 입력되었는지 확인
// 제대로 된 입력이라면 false 반환
// 만약 잘못된 양식으로 입력했다면 어떤 타입인지, 어떤 게 잘못되었는지 반환
function checkValidInput(inputElement) {
    const elementType = inputElement.id;
    switch (elementType) {
        case 'email':
            if (checkBlank(inputElement)) {
                return [elementType, 'blank', '이메일을 입력해주세요.'];
            } else if (checkEmailType(inputElement)) {
                return [elementType, 'wrong email', '잘못된 이메일 형식입니다.'];
            } else {
                return [];
            }

        case 'password':
            if (checkBlank(inputElement)) {
                return [elementType, 'blank', '비밀번호를 입력해주세요.'];
            } else if (checkLength(inputElement)) {
                return [elementType, 'wrong length', '비밀번호를 8자 이상 입력해주세요.'];
            } else {
                return [];
            }

        case 'password-check':
            const standard = inputElement.parentElement.previousElementSibling.children[1]
            if (checkMismatch(inputElement, standard)) {
                return [elementType, 'mismatch', '비밀번호가 일치하지 않습니다.'];
            } else {
                return [];
            }

        default:
            console.log('현재 값은 이메일과 패스워드가 아닙니다.');
            return [];
    }
}



export { checkBlank, checkEmailType, checkLength, resetWrongInput, changeWrongInput, checkValidInput };