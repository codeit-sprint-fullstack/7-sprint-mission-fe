const focusOut = document.querySelectorAll('[class$="password_box"]');
const emailFocusOut =document.querySelectorAll('[class$="email_box"]');
const loginBuntton =document.querySelector('.login_button');
const modalClass =document.querySelector('.login_modal');
const modalButton =document.querySelector('.modal_button');
const overLayPage =document.querySelector('.overlay');
const validation =document.querySelector('.focus_line');



const USER_DATA = [
  { email: 'codeit1@codeit.com', password: "codeit101!" },
    { email: 'codeit2@codeit.com', password: "codeit202!" },
    { email: 'codeit3@codeit.com', password: "codeit303!" },
    { email: 'codeit4@codeit.com', password: "codeit404!" },
    { email: 'codeit5@codeit.com', password: "codeit505!" },
    { email: 'codeit6@codeit.com', password: "codeit606!" },
    { email: '1@1', password:"12341234"},
]
//로그인버튼 활성화

const updateButtonId =document.querySelector('.validation_id');
const updateButtonPw =document.querySelector('.validation_pw');

function updateLoginButton(){
  if(updateButtonId.value && updateButtonPw.value){
    loginBuntton.classList.add('active');
    loginBuntton.disabled  = false;
  }
  else{
    loginBuntton.classList.remove('active');
    loginBuntton.disabled  = true;
  }
}
updateButtonId.addEventListener('input',updateLoginButton);
updateButtonPw.addEventListener('input',updateLoginButton);



//로그인 데이터확인로직
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.login_button').addEventListener('click', function () {
    const a = document.querySelector('.validation_id').value;
    const b = document.querySelector('.validation_pw').value;
    const findId = USER_DATA.find(user => user.email == a && user.password == b);
    if(findId){
      console.log("로그인 성공"); //로그인성공하면 /items로 이동
    }
    else{
      console.log("로그인 실패");
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

// 패스워드 문구 추가
focusOut.forEach(box => {
  const input = box.querySelector('input');
  const targetInput = document.querySelector(".password_box");
  input.addEventListener('input' ,(e) => {
    if(e.target.value.length < 8){
      if(!box.querySelector('.input_label')){
        const newLabel = document.createElement("label");
        newLabel.textContent = "비밀번호를 8자 이상 입력해주세요.";
        newLabel.classList.add('input_label');
        input.classList.add('focusout_input');
        targetInput.append(newLabel);
      }
    }
    else{
      const dupLabel = box.querySelector('.input_label');
      if(dupLabel){
        dupLabel.remove();
        input.classList.remove('focusout_input');
      }
    }
  });
});

//이메일 문구 추가
emailFocusOut.forEach(box => {
  const input = box.querySelector('input');
  const targetInput = document.querySelector(".email_box");
  
  input.addEventListener('input' ,(e) => {
    if(e.target.value.includes("@") != true){
      if(!box.querySelector('.input_label')){
        const newLabel = document.createElement("label");
        newLabel.textContent = "잘못된 이메일 형식입니다.";
        newLabel.classList.add('input_label');
        input.classList.add('focusout_input');
        targetInput.append(newLabel);
      }
    }
    else{
      const dupLabel = box.querySelector('.input_label');
      if(dupLabel){
        dupLabel.remove();
        input.classList.remove('focusout_input');
      }
    }
  });
});
