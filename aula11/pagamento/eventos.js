function ocultarFrente() {
  CARD_FRENTE.style.display = 'none';
  CARD_VERSO.style.display = 'block';

  CARD_VERSO.classList.add('animate__animated');
  CARD_VERSO.classList.add('animate__flipInY');
}

function ocultarVerso() {
  CARD_VERSO.style.display = 'none';
  CARD_FRENTE.style.display = 'block';

  CARD_FRENTE.classList.add('animate__animated');
  CARD_FRENTE.classList.add('animate__flipInY');
}

INPUT_CPF.addEventListener('focus', ocultarFrente);
INPUT_CVV.addEventListener('focus', ocultarFrente);

INPUT_NUMERO.addEventListener('focus', ocultarVerso);
INPUT_TITULAR.addEventListener('focus', ocultarVerso);
SELECT_MES.addEventListener('focus', ocultarVerso);
SELECT_ANO.addEventListener('focus', ocultarVerso);


INPUT_CPF.addEventListener('keyup', function () {
  CARD_CPF.innerHTML = INPUT_CPF.value;
});

INPUT_CVV.addEventListener('keyup', function () {
  CARD_CVV.innerHTML = INPUT_CVV.value;
});


INPUT_NUMERO.addEventListener('keyup', function () {
  CARD_NUMERO.innerHTML = INPUT_NUMERO.value;

  if (INPUT_NUMERO.value[0] === '4') {
    CARD_BANDEIRA.innerHTML = `<img width="100px" src="${IMG_VISA}">`;
  } else if (INPUT_NUMERO.value[0] === '5') {
    CARD_BANDEIRA.innerHTML = `<img width="100px" src="${IMG_MASTERCARD}">`;
  } else {
    CARD_BANDEIRA.innerHTML = 'BANDEIRA';
  }

  if (INPUT_NUMERO.value === '') {
    CARD_NUMERO.innerHTML = '0000 0000 0000 0000';
  }
});

INPUT_TITULAR.addEventListener('keyup', function () {
  CARD_TITULAR.innerHTML = INPUT_TITULAR.value.toUpperCase();

  if (INPUT_TITULAR.value === '') {
    CARD_TITULAR.innerHTML = 'NOME DO TITULAR';
  }
});

function alterarValidade() {
  let mes = SELECT_MES.value;
  let ano = SELECT_ANO.value;

  CARD_VALIDADE.innerHTML = mes + "/" + ano;
}

SELECT_MES.addEventListener('change', alterarValidade);
SELECT_ANO.addEventListener('change', alterarValidade);
