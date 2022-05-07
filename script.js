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
