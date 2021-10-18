let idade = prompt('qual sua idade');

if (idade <= 12) {
  document.write('15%');
}
else if (idade >= 13 && idade <= 17) {
  document.write('25%');
}
else if (idade >= 18 && idade <= 59) {
  document.write('20%');
}
else if (idade >= 60) {
  document.write('30%');
}
