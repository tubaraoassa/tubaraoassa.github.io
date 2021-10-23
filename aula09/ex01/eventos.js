const SELECT_DIA = document.getElementById('dia')
const SELECT_ANO = document.getElementById('ano')
const SELECT_MES = document.getElementById('mes')

const MESES = {
  1:"janeiro",
  2:"fevereiro",
  3:"marco",
  4:"abril",
  5:"maio",
  6:"junho",
  7:"julho",
  8:"agosto",
  9:"setembro",
  10:"outubro",
  11:"novembro",
  12:"dezembro"
}
for (let dia=1; dia<=31; dia++){
  SELECT_DIA.innerHTML+=`
    <option>${dia}</option>
    `;
}

for (let mes=1; mes<=12; mes++){
  SELECT_MES.innerHTML+=`
    <option>${MESES[mes]}</option>
    `;
}

for (let  ano=2021; ano>=1900; ano--){
  SELECT_ANO.innerHTML+=`
    <option>${ano}</option>
    `;
}
