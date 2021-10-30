const INPUT_NUMERO = document.getElementById('form-numero');
const INPUT_TITULAR = document.getElementById('form-titular');
const INPUT_CPF = document.getElementById('form-cpf');
const INPUT_CVV = document.getElementById('form-cvv');
const SELECT_MES = document.getElementById('form-mes');
const SELECT_ANO = document.getElementById('form-ano');


const CARD_NUMERO = document.getElementById('card-numero');
const CARD_TITULAR = document.getElementById('card-titular');
const CARD_VALIDADE = document.getElementById('card-validade');
const CARD_BANDEIRA = document.getElementById('card-bandeira');
const CARD_CVV = document.getElementById('card-cvv');
const CARD_CPF = document.getElementById('card-cpf');
const CARD_FRENTE = document.getElementById('card-frente');
const CARD_VERSO = document.getElementById('card-verso');

INPUT_CPF.addEventListener("focus", function(){
  CARD_FRENTE.style.display = "none";
  CARD_VERSO.style.display = "block";
});

INPUT_CPF.addEventListener("blur", function(){
  CARD_FRENTE.style.display = "block";
  CARD_VERSO.style.display = "none";
});



INPUT_NUMERO.addEventListener('keyup',function() {
  CARD_NUMERO.innerHTML = INPUT_NUMERO.value;
  if (INPUT_NUMERO.value === "") {
    CARD_NUMERO.innerHTML = "0000 0000 0000 0000 "
  }
  if (INPUT_NUMERO.value[0] === "4"){
    CARD_BANDEIRA.innerHTML ="VISA";
  } else if (INPUT_NUMERO.value[0] === "5") {
    CARD_BANDEIRA.innerHTML = "MASTERCARD"
  } else {
    CARD_BANDEIRA.innerHTML = "BANDEIRA"
  }
});

INPUT_TITULAR.addEventListener('keyup',function() {
  CARD_TITULAR.innerHTML = INPUT_TITULAR.value.toUpperCase();
  if (INPUT_NUMERO.value === "") {
    CARD_NUMERO.innerHTML = "NOME DO TITULAR "
  }
});

function alterarValidade() {
  let mes = SELECT_MES.value;
  let ano = SELECT_ANO.value;
  CARD_VALIDADE.innerHTML = mes + "/" + ano;
}

SELECT_MES.addEventListener("change", alterarValidade);
SELECT_ANO.addEventListener("change", alterarValidade);

INPUT_CPF.addEventListener('keyup',function() {
  CARD_CPF.innerHTML = INPUT_CPF.value;
});

INPUT_CVV.addEventListener('keyup',function() {
  CARD_CVV.innerHTML = INPUT_CVV.value;
});
