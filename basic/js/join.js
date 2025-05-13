import { USER_DATA } from './userData.js';

const joinEmailInput  = document.querySelector('#email');
const joinBtn = document.querySelector('#btn_join');
const $form = document.querySelector('form');

function checkEmailInfo(){
    const emailValue = joinEmailInput .value;
    
    const user = USER_DATA.find((el) => {
        return el.email === emailValue;
    })
    
    if(user){
        alert("이미 사용중인 이메일입니다.")
        joinEmailInput.value = "";
        joinEmailInput.focus();
    } 
}
joinEmailInput.addEventListener('blur', checkEmailInfo);

$form.addEventListener('input', function(){
    const inputs = $form.querySelectorAll('input');
    let data = true;
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim() === '') {
            data = false;
            console.log("11");
        }
    }
    if (data && !$form.querySelector('.input-error')) {
        joinBtn.classList.replace("disabled", "active")
    } else{
        joinBtn.classList.replace("active", "disabled");
    }
});