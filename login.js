const focusOut = document.querySelectorAll('[class$="password_box"]');
const emailFocusOut =document.querySelectorAll('[class$="email_box"]');


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

// 내가 지금 하려고한거
// 지금회원가입창에서 인풋아래에 라벨이 점점 늘어남 그 이유가 지정이 어딘가 잘못된거같음 
// 또 느낀거 커밋메시지바꿔야함 아직 유효성검사가 덜됐음