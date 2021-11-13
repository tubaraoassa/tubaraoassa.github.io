const URL_REGIAO = 'https://servicodados.ibge.gov.br/api/v1/localidades/regioes'
const URL_ESTADO = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
const URL_CIDADE = 'https://servicodados.ibge.gov.br/api/v1/localidades/municipios'
const SELECT_REGIAO =document.getElementById('regiao');
const SELECT_ESTADO =document.getElementById('estado');
const SELECT_CIDADE =document.getElementById('cidade');

fetch(URL_REGIAO)
.then((resposta) => resposta.json())
.then((regioes) => {
  regioes.forEach((cadaRegiao) => {
    SELECT_REGIAO.innerHTML += `<option>${cadaRegiao.nome}</option>`;
  });
});
fetch(URL_ESTADO)
.then((resposta) => resposta.json())
.then((estados) => {
  estados.forEach((cadaEstado) => {
    SELECT_ESTADO.innerHTML += `<option>${cadaEstado.nome}</option>`;
  });
});
fetch(URL_CIDADE)
.then((resposta) => resposta.json())
.then((cidades) => {
  cidades.forEach((cadaCidade) => {
    SELECT_CIDADE.innerHTML += `<option>${cadaCidade.nome}</option>`;
  });
});
