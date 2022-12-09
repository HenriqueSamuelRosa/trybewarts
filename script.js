// constants

const loginButton = document.getElementById('entrar');

const check = document.getElementById('agreement');
const submitBtn = document.querySelector('#submit-btn');

const TEXT_AREA = document.getElementById('textarea');
const maxCharacter = 500;

const FORM = document.getElementById('form');

const NAME_INPUT = document.getElementById('input-name');
const LAST_NAME_INPUT = document.getElementById('input-lastname');
const EMAIL_INPUT = document.getElementById('input-email');
const HOUSE_INPUT = document.getElementById('house');
const FAMILY = document.getElementsByName('family');
const CONTENTS = document.getElementsByClassName('subject');
const RATES = document.getElementsByName('rate');

// contants sumbmited form

const FULL_NAME = document.getElementById('full-name');
const SUBMITED_EMAIL = document.getElementById('email');
const SUBMITED_HOUSE = document.getElementById('house-submited');
const SUBMITED_FAMILY = document.getElementById('selected-family');
const SUBMITED_CONTENTS = document.getElementById('selected-contents');
const SUBMITED_EVALUATION = document.getElementById('selected-evaluation');
const SUBMITED_COMENTS = document.getElementById('coments');

// functions

function getContentsChecked(contents) {
  const arrayContents = [];

  for (let index = 0; index < contents.length; index += 1) {
    if (contents[index].checked) {
      arrayContents.push(` ${contents[index].value}`);
    }
  }
  return arrayContents;
}

function getCheckedRadio(values) {
  for (let index = 0; index < values.length; index += 1) {
    if (values[index].checked === true) return values[index];
  }
}

function login() {
  const textEmail = document.getElementById('inputEmail').value;
  const textPassword = document.getElementById('inputPass').value;
  if (textEmail === 'tryber@teste.com' && textPassword === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

function changeSubmit() {
  if (check.checked === true) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
}

function countCharacter() {
  const { length } = TEXT_AREA.value;
  document.getElementById('counter').innerHTML = maxCharacter - length;
}

function submitForm(e) {
  e.preventDefault();
  FORM.style.display = 'none';
  FULL_NAME.innerHTML = `Nome: ${NAME_INPUT.value} ${LAST_NAME_INPUT.value}`;
  SUBMITED_EMAIL.innerHTML = `Email: ${EMAIL_INPUT.value}`;
  SUBMITED_HOUSE.innerHTML = `Casa: ${HOUSE_INPUT.value}`;
  SUBMITED_FAMILY.innerHTML = `Família: ${getCheckedRadio(FAMILY).value}`;
  SUBMITED_CONTENTS.innerHTML = `Matérias: ${getContentsChecked(CONTENTS)}`;
  SUBMITED_EVALUATION.innerHTML = `Avaliação: ${getCheckedRadio(RATES).value}`;
  SUBMITED_COMENTS.innerHTML = `Observações: ${TEXT_AREA.value}`;
}

// events

TEXT_AREA.addEventListener('keydown', countCharacter);
TEXT_AREA.addEventListener('keyup', countCharacter);

loginButton.addEventListener('click', login);
check.addEventListener('click', changeSubmit);
submitBtn.addEventListener('click', submitForm);
