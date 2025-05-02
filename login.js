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
]

//로그인 데이터확인로직
document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.login_button').addEventListener('click', function () {
    const a = document.querySelector('.validation_id').value;
    const b = document.querySelector('.validation_pw').value;
    const findId = USER_DATA.find(user => user.email == a && user.password == b);
    if(findId){
      console.log("로그인 성공");
    }
    else{
      console.log("로그인 실패");
      modalClass.style.display ="block";
      overLayPage.style.display ="block";
    }
  });
});


modalButton.onclick = () => {  
  modalClass.style.display ="none";
  overLayPage.style.display ="none";
}

// loginBuntton.onclick = function(){
//   modalClass.style.display ="block";
//   overLayPage.style.display ="block";
// }

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
