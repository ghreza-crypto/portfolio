const errorMessage = document.querySelector('.emailValidationError');
const form = document.querySelector('#form');
const email = document.querySelector('#email');
const emailRegex = /^[a-z0-9_.]+@[a-z0-9_.]+\.[a-z0-9_.]+$/;

form.addEventListener('submit', (e) => {
    if (!emailRegex.test(email.value)) {
      e.preventDefault();
      errorMessage.style.display = 'block';
      email.style.border = '3px solid red';
    }
  });