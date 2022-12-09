const submitButton = document.getElementById('entrar');

function logar() {
  const textEmail = document.getElementById('inputEmail').value;
  const textPassword = document.getElementById('inputPass').value;
  if (textEmail === 'tryber@teste.com' && textPassword === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

submitButton.addEventListener('click', logar);

const check = document.getElementById('agreement');
const submitBtn = document.querySelector('#submit-btn');

function changeSubmit() {
  if (check.checked === true) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

check.addEventListener('click', changeSubmit);

const textArea = document.getElementById('textarea');

const maxCharacter = 500;

function countCharacter() {
  const { length } = textArea.value;
  document.getElementById('counter').innerHTML = maxCharacter - length;
}

textArea.addEventListener('keydown', countCharacter);
textArea.addEventListener('keyup', countCharacter);
