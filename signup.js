const passwordFocus = document.querySelectorAll('[class$="password_box"]');
const emailFocus = document.querySelectorAll('[class$="email_box"]');
const confirmFocus = document.querySelectorAll('[class$="confirm_box"]');


function upDateLabel(targetBox, message) {
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
      upDateLabel(box, "잘못된 이메일 형식입니다.");
    } else {
      removeLabel(box);
    }
  });
});

let savepw = 0;
//비밀번호
passwordFocus.forEach(box => {
  const input = box.querySelector('input');
  input.addEventListener('input', (e) => {
    if (e.target.value.length < 8) { 
      upDateLabel(box, "비밀번호를 8자 이상 입력해주세요");
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
      upDateLabel(box, "비밀번호가 일치하지 않습니다.");
    } else {
      removeLabel(box);
    }
  });
});