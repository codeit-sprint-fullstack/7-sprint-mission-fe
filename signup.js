import {USER_DATA} from '../7-sprint-mission-fe/userData.js';

const passwordFocus = document.querySelectorAll('[class$="password_box"]');
const emailFocus = document.querySelectorAll('[class$="email_box"]');
const confirmFocus = document.querySelectorAll('[class$="confirm_box"]');
const signBuntton =document.querySelector('.sign_button');




function updateLabel(targetBox, message) {
  const input = targetBox.querySelector('input');
  if (!targetBox.querySelector('.input_label')) {
    const newLabel = document.createElement('label');
    newLabel.textContent = message;
    newLabel.classList.add('input_label');
    input.classList.add('focusout_input');
    targetBox.append(newLabel);
  }
}

function removeLabel(targetBox) {
  const input = targetBox.querySelector('input');
  const dupLabel = targetBox.querySelector('.input_label');
  if (dupLabel) {
    dupLabel.remove();
    input.classList.remove('focusout_input');
  }
}

//이메일

emailFocus.forEach(box => {
  const input = box.querySelector('input');
  input.addEventListener('input', (e) => {
    if (e.target.value.includes("@") != true) { 
      updateLabel(box, "잘못된 이메일 형식입니다.");
    } else {
      removeLabel(box);
    }
  });
});

//비밀번호

let savepw = 0;
passwordFocus.forEach(box => {
  const input = box.querySelector('input');
  input.addEventListener('input', (e) => {
    if (e.target.value.length < 8) { 
      updateLabel(box, "비밀번호를 8자 이상 입력해주세요");
    } else {
      removeLabel(box);
    }
    savepw = input.value;
  });
});

//비밀번호 확인


confirmFocus.forEach(box => {
  const input = box.querySelector('input');
  input.addEventListener('input', (e) => {
    if (savepw != e.target.value) { 
      updateLabel(box, "비밀번호가 일치하지 않습니다.");
    } else {
      removeLabel(box);
    }
  });
});

// 회원가입버튼 활성화 기능

const updateButtonId =document.querySelector('.validation_id');
const updateButtonPw =document.querySelector('.validation_pw');
const updateButtonnick =document.querySelector('.validation_nick');
const updateButtonconf =document.querySelector('.validation_conf');

function updateLoginButton(){
  if(updateButtonId.value && updateButtonPw.value && updateButtonnick.value && updateButtonconf.value){
    if(updateButtonPw.value.length>=8 && updateButtonconf.value.length >= 8){
    signBuntton.classList.add('active');
    signBuntton.disabled  = false;
    }
  }
  else{
    signBuntton.classList.remove('active');
    signBuntton.disabled  = true;
  }
}
updateButtonId.addEventListener('input',updateLoginButton);
updateButtonPw.addEventListener('input',updateLoginButton);
updateButtonnick.addEventListener('input',updateLoginButton);
updateButtonconf.addEventListener('input',updateLoginButton);

//해야할것 아이콘 눌렀을경우 비밀번호보이게 설정

const iconClick = document.querySelectorAll('.icon_eye');

iconClick.forEach((icon) => {
  icon.addEventListener('click', (e) => {
    const input = icon.closest('.input_icon_box').querySelector('input');
    if (e.target.classList.contains('fa-eye-slash')) {
      icon.classList.remove('fa-eye-slash');
      icon.classList.add('fa-eye');
      input.setAttribute('type','text');
    } else {
      icon.classList.remove('fa-eye');
      icon.classList.add('fa-eye-slash');
      input.setAttribute('type','password');
    }
  });
});

// 모달창
const modalButton =document.querySelector('.modal_button');
const loginBuntton =document.querySelector('.sign_button');
const modalClass =document.querySelector('.login_modal');
const overLayPage =document.querySelector('.overlay');

document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.sign_button').addEventListener('click', function () {
    const idValue = document.querySelector('.validation_id').value;
    const pwValue = document.querySelector('.validation_pw').value;
    const confValue = document.querySelector('.validation_conf').value;
    const findId = !USER_DATA.some(user => user.email === idValue);
    if(findId){
      if(!(pwValue === confValue)){
        const modelRename = document.querySelector('.modal_box');
        const modelFirstChild = modelRename.firstElementChild;
        modelFirstChild.textContent = "비밀번호가 일치하지 않습니다.";
        modalClass.style.display ="block";
        overLayPage.style.display ="block";
        loginBuntton.classList.remove('active');
      }
      else{
        console.log("로그인 성공"); //로그인성공하면 /items로 이동
        window.location.href = '/login';
      }
    }
    else{
      console.log("로그인 실패");
      const modelRename = document.querySelector('.modal_box');
      const modelFirstChild = modelRename.firstElementChild;
      modelFirstChild.textContent = "사용 중인 이메일입니다.";
      modalClass.style.display ="block";
      overLayPage.style.display ="block";
      loginBuntton.classList.remove('active');
    }
  });
});


modalButton.onclick = () => {  
  modalClass.style.display ="none";
  overLayPage.style.display ="none";
}