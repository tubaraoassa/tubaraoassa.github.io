const URL_REGIAO = 'https://servicodados.ibge.gov.br/api/v1/localidades/regioes';
const urlEstados = (id) => `https://servicodados.ibge.gov.br/api/v1/localidades/regioes/${id}/estados`;
const urlCidades = (uf) => `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`;

const SELECT_REGIAO = document.getElementById('regiao');
const SELECT_ESTADO = document.getElementById('estado');
const SELECT_CIDADE = document.getElementById('cidade');

fetch(URL_REGIAO)
  .then((resposta) => resposta.json())
  .then((regioes) => {
    regioes.forEach((cadaRegiao) => {
      SELECT_REGIAO.innerHTML += `<option value="${cadaRegiao.id}">${cadaRegiao.nome}</option>`;
    });
  })
  .catch((error) => {
    alert('Vish, algum problema aconteceu, tente de novo.');
  });

SELECT_REGIAO.addEventListener('change', () => {

  let regiaoId = SELECT_REGIAO.value;

  SELECT_ESTADO.innerHTML = '<option> -- Selecione -- </option>';

  fetch(urlEstados(regiaoId))
    .then((resposta) => resposta.json())
    .then((estados) => {
      estados.forEach((cadaEstado) => {
        SELECT_ESTADO.innerHTML += `<option value="${cadaEstado.id}">${cadaEstado.nome}</option>`;
      });
    });

});

SELECT_ESTADO.addEventListener('change', () => {
  let estadoId = SELECT_ESTADO.value;

  SELECT_CIDADE.innerHTML = `<option>-- Carregando --</option>`;

  fetch(urlCidades(estadoId))
    .then(response => response.json())
    .then(cidades => {
      //chegou ate aqui, é porque trouxe alguma coisa
      SELECT_CIDADE.innerHTML = `<option>-- Selecione --</option>`;

      cidades.forEach(cadaCidade => {
        SELECT_CIDADE.innerHTML += `<option>${cadaCidade.nome}</option>`;
      })
    });
});
