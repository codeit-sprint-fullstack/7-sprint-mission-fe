import { users } from './userData.js';

const loginEmailInput  = document.querySelector('#email');
const loginPasswordInput = document.querySelector('#password');
const loginBtn = document.querySelector('#btn_login');
const $form = document.querySelector('form');

function checkUserInfo(){
    const emailValue = loginEmailInput .value;
    const passwordValue = loginPasswordInput.value;
    
    const user = users.find((el) => {
        console.log(el.email === emailValue)
        return el.email === emailValue;
    })
    
    if(user){
        if(user.password === passwordValue){
            //console.log("로그인 성공")
            window.location.href = '../items';
        } else{
            alert("비밀번호가 일치하지 않습니다.")
        }
    } else{
        alert("회원정보가 일치하지 않습니다.")
    } 
}
loginBtn.addEventListener('click', checkUserInfo);

$form.addEventListener('input', function(){
    if (loginEmailInput.value && loginPasswordInput.value && !$form.querySelector('.input-error')) {
        loginBtn.classList.replace("disabled", "active")
    } else{
        loginBtn.classList.replace("active", "disabled");
    }
});