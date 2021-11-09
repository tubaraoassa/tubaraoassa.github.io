FORM_CARD.addEventListener('submit', function (event) {
  //impedindo o formulario de ser enviado.
  event.preventDefault();

  let erros = 0;

  if (INPUT_NUMERO.value.length !== 19) {
    INPUT_NUMERO.classList.add('is-invalid');
    erros++;
  }

  if (INPUT_TITULAR.value.length < 10) {
    INPUT_TITULAR.classList.add('is-invalid');
    erros++;
  }

  if (INPUT_CPF.value.length !== 14) {
    INPUT_CPF.classList.add('is-invalid');
    erros++;
  }

  if (INPUT_CVV.value.length !== 3) {
    INPUT_CVV.classList.add('is-invalid');
    erros++;
  }

  if (SELECT_MES.value === "MM") {
    SELECT_MES.classList.add('is-invalid');
    erros++;
  }

  if (SELECT_ANO.value === "YY") {
    SELECT_ANO.classList.add('is-invalid');
    erros++;
  }

  if (erros !== 0) {
    return;
  }

  document.write('Ok, processando pagamento');
});


INPUT_NUMERO.addEventListener('keyup', function () {
  INPUT_NUMERO.classList.remove('is-invalid');

  if (INPUT_NUMERO.value.length === 19) {
    INPUT_NUMERO.classList.add('is-valid');
  }
});

INPUT_TITULAR.addEventListener('keyup', function () {
  INPUT_TITULAR.classList.remove('is-invalid');

  if (INPUT_TITULAR.value.length > 10) {
    INPUT_TITULAR.classList.add('is-valid');
  }
});

INPUT_CPF.addEventListener('keyup', function () {
  INPUT_CPF.classList.remove('is-invalid');

  if (INPUT_CPF.value.length === 14) {
    INPUT_CPF.classList.add('is-valid');
  }
});

INPUT_CVV.addEventListener('keyup', function () {
  INPUT_CVV.classList.remove('is-invalid');

  if (INPUT_CVV.value.length === 3) {
    INPUT_CVV.classList.add('is-valid');
  }
});

SELECT_MES.addEventListener('change', function () {
  SELECT_MES.classList.remove('is-invalid');

  if (SELECT_MES.value !== "MM") {
    SELECT_MES.classList.add('is-valid');
  }
});

SELECT_ANO.addEventListener('change', function () {
  SELECT_ANO.classList.remove('is-invalid');

  if (SELECT_ANO.value !== "YY") {
    SELECT_ANO.classList.add('is-valid');
  }
});
