
const eyes = document.querySelectorAll('.eyes');

eyes.forEach((eye) => {

  eye.addEventListener('click', function () {

    const inputWrap = eye.closest('.input_wrap'); 

    const passwordInput = inputWrap.querySelector('input');
    const eyeIcon = eye.querySelector('i');

    inputWrap.classList.toggle('active');


    if (inputWrap.classList.contains('active')) { 
      eyeIcon.className = 'fas fa-eye';
      passwordInput.type = 'text';
    } else {
      eyeIcon.className = 'fas fa-eye-slash';
      passwordInput.type = 'password';
    }
  });

});

