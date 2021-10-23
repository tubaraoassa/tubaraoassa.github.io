const VISOR = document.getElementById("visor")
let operacao = false;
let memoriaAuxiliar = 0;

function selecionarNumero(numero){
//quantidade de caracteres
  if (VISOR.innerHTML.length > 9){
    return;
  }
  if (numero == 0 && VISOR.innerHTML == 0){
    return;
  }
  if (VISOR.innerHTML == 0){
    VISOR.innerHTML = numero;
    return;
  }

  if (operacao === true && memoriaAuxiliar != 0){
    VISOR.innerHTML = numero;
    operacao = false;
    VISOR.style.color = "#FFF"
    return;
  }

  VISOR.innerHTML += numero;
}

function limpar() {
  VISOR.innerHTML = 0;
  memoriaAuxiliar = 0;
  operacao = false;
  VISOR.style.color = "#FFF";

}

function somar(){
  operacao = true;
  VISOR.style.color = '#888';

  if (memoriaAuxiliar !=0){
    VISOR.innerHTML= memoriaAuxiliar + parseInt(VISOR.innerHTML);
  }
  memoriaAuxiliar = parseInt(VISOR.innerHTML)
}
