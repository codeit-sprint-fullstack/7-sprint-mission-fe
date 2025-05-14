import { users } from './userData.js';

const joinEmailInput  = document.querySelector('#email');
const joinBtn = document.querySelector('#btn_join');
const $form = document.querySelector('form');

function checkEmail(){
    const emailValue = joinEmailInput .value;
    
    const user = users.find((el) => {
        return el.email === emailValue;
    })
    
    if(user){
        alert("이미 사용중인 이메일입니다.")
        joinEmailInput.value = "";
        joinEmailInput.focus();
    } 
}
joinEmailInput.addEventListener('blur', checkEmail);


function validateForm(){
    const inputs = $form.querySelectorAll('input');
    let data = true;
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim() === '') {
            data = false;
        }
    }
    if (data && !$form.querySelector('.input-error')) {
        joinBtn.classList.replace("disabled", "active")
    } else{
        joinBtn.classList.replace("active", "disabled");
    }
}
$form.addEventListener('input', validateForm);

joinBtn.addEventListener('click', function(){
    validateForm();
    
    if(joinBtn.classList.contains("active")){
        window.location.href = './login.html';
    }
});