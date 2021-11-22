const INPUT_CEP = document.getElementById('cep');
const INPUT_LOGRADOURO = document.getElementById('logradouro');
const INPUT_NUMERO = document.getElementById('numero');
const INPUT_BAIRRO = document.getElementById('bairro');
const INPUT_CIDADE = document.getElementById('cidade');
const INPUT_UF = document.getElementById('uf');
const INPUT_BUTTON = document.getElementById('button')

//chamar API correios

INPUT_BUTTON.addEventListener('click',  () => {
  if (INPUT_CEP.value.length < 8) {
    return;
  }

fetch(`https://viacep.com.br/ws/${INPUT_CEP.value}/json`)
  .then((resposta) => resposta.json())
  .then((dados) => {
    if (dados.erro === true) {
      alert('CEP INVALIDO');
      return;
    }
    INPUT_LOGRADOURO.value = dados.logradouro;
    INPUT_BAIRRO.value = dados.bairro;
    INPUT_CIDADE.value = dados.localidade;
    INPUT_UF.value = dados.uf;
    INPUT_NUMERO.focus();
  });
});

//validacao

INPUT_CEP.addEventListener('keyup', function () {
  INPUT_CEP.classList.remove('is-invalid');

  if (INPUT_CEP.value.length === 8) {
    INPUT_CEP.classList.add('is-valid');
  }
  else {
    INPUT_CEP.classList.add('is-invalid');
  }
});

INPUT_LOGRADOURO.addEventListener('keyup', function (){
  INPUT_LOGRADOURO.classList.remove('is-invalid');

  if (INPUT_LOGRADOURO.value.length >= 10) {
    INPUT_LOGRADOURO.classList.add('is-valid');
  }
  else {
    INPUT_LOGRADOURO.classList.add('is-invalid');
  }
});

INPUT_NUMERO.addEventListener('keyup', function (){
  INPUT_NUMERO.classList.remove('is-invalid');

if (INPUT_NUMERO.value.length > 0) {
  INPUT_NUMERO.classList.add('is-valid');
}
else {
  INPUT_NUMERO.classList.add('is-invalid');
}
});

INPUT_BAIRRO.addEventListener('keyup', function (){
  INPUT_BAIRRO.classList.remove('is-invalid');

  if (INPUT_BAIRRO.value.length >= 1) {
    INPUT_BAIRRO.classList.add('is-valid');
  }
  else {
    INPUT_BAIRRO.classList.add('is-invalid');
  }
});

INPUT_CIDADE.addEventListener('keyup', function (){
  INPUT_CIDADE.classList.remove('is-invalid');

  if (INPUT_CIDADE.value.length >= 1) {
    INPUT_CIDADE.classList.add('is-valid');
  }
  else {
    INPUT_CIDADE.classList.add('is-invalid');
  }
});

INPUT_UF.addEventListener('keyup', function (){
  INPUT_UF.classList.remove('is-invalid');

  if (INPUT_UF.value.length >= 2) {
    INPUT_UF.classList.add('is-valid');
  }
  else {
    INPUT_UF.classList.add('is-invalid');
  }
});
