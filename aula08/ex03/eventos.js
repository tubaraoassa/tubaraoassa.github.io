var lado1 = prompt('digite valor de um lado1');
var lado2 = prompt('digite valor de um lado2');
var lado3 = prompt('digite valor de um lado3');

if (lado1===lado2 && lado2===lado3) {
  document.write('equilatero');
}
if (lado1!==lado2 && lado2!==lado3 && lado3!==lado1) {
  document.write('escaleno');
}
if ((lado1===lado2 && lado2!==lado3) || (lado2===lado3 && lado3!==lado1)) {
  document.write('isoceles')
}
