const URL_REGIAO = 'https://servicodados.ibge.gov.br/api/v1/localidades/regioes';
const urlEstados = (id) => `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${id}/estados`;
const urlCidades = (uf) => `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`;

const SELECT_REGIAO = document.getElementById('regiao');
const SELECT_ESTADO = document.getElementById('estado');
const SELECT_CIDADE = document.getElementById('cidade');
const IMAGEM_LOADING1 = document.getElementById('loading1');
const IMAGEM_LOADING2 = document.getElementById('loading2');

//select regiao
fetch(URL_REGIAO)
  .then((resposta) => resposta.json())
  .then((regioes) => {
    regioes.forEach((cadaRegiao) => {
      SELECT_REGIAO.innerHTML += `<option value=${cadaRegiao.id}>${cadaRegiao.nome}</option>`;
    });
  })
  .catch((error) => {
    alert('Vish, algum problema aconteceu, tente de novo.');
  });

//regiao pra estado
SELECT_REGIAO.addEventListener('change', () => {
  IMAGEM_LOADING1.src = 'img/loading.gif'
  setTimeout(() =>{IMAGEM_LOADING1.style.display = "none"}, 3000);
  let regiaoId = SELECT_REGIAO.value;

  SELECT_ESTADO.innerHTML = `<option>-- Selecione --</option>`;

  fetch(urlEstados(regiaoId))
    .then((resposta) => resposta.json())
    .then((estados) => {
      estados.forEach((cadaEstado) => {
        SELECT_ESTADO.innerHTML += `<option value=${cadaEstado.id}>${cadaEstado.nome}</option>`;
        IMAGEM_LOADING1.style.display = "none"
      });
    });
});

//estado pra cidades
SELECT_ESTADO.addEventListener('change', () => {
IMAGEM_LOADING2.src = 'img/loading.gif'
setTimeout(() =>{IMAGEM_LOADING2.style.display = "none"}, 3000);


  let estadoId = SELECT_ESTADO.value;
  SELECT_CIDADE.innerHTML = `<option>-- Selecione --</option>`;

    fetch(urlCidades(estadoId))
      .then(response => response.json())
      .then(cidades => {
        cidades.forEach(cadaCidade => {
          SELECT_CIDADE.innerHTML += `<option>${cadaCidade.nome}</option>`;
          IMAGEM_LOADING2.style.display = "none"
        })
      });


});
