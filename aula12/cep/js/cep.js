const INPUT_CEP = document.getElementById('cep');
const INPUT_LOGRADOURO = document.getElementById('logradouro');
const INPUT_NUMERO = document.getElementById('numero');
const INPUT_BAIRRO = document.getElementById('bairro');
const INPUT_CIDADE = document.getElementById('cidade');
const INPUT_UF = document.getElementById('uf');

INPUT_CEP.addEventListener('blur', () => {
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
