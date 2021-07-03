const botaoSalvar = document.querySelector('[data-save]');
const form = document.querySelector('[data-form]');

botaoSalvar.addEventListener('click', function(event){
  event.preventDefault();

  var anunciado = obtemAnuncios(form);

  var novoAnuncio = montaTr(anunciado);   

  var tabela = document.querySelector('[data-table]');
  tabela.appendChild(novoAnuncio);
  calculaInvestimento()
  calculaCliques()
  calculaVisualizacoes()
})

function obtemAnuncios(form){
  var anunciado = {
     anuncio : form.anuncio.value,
     cliente : form.cliente.value,
     data1: moment(form.dataInicio.value).format('DD/MM/YYYY'),
     data2: moment(form.dataFim.value).format('DD/MM/YYYY'),
     investimento: calculaInvestimento(),
     visualizacoes: calculaVisualizacoes(),
     cliques: calculaCliques(),
     compartilhamentos: calculaCompartilhamentos()          
  }
  return anunciado;
}

function montaTd(dado, classe){
  var novaTd = document.createElement('td');
  novaTd.textContent = dado;
  novaTd.classList.add(classe);

  return novaTd;
}

function montaTr(anunciado){
  var novoAnunciado = document.createElement('tr');
  novoAnunciado.classList.add('table-item');

  var  novoAnuncioTd = montaTd(anunciado.anuncio, 'info-anuncio');
  var novoClienteTd = montaTd(anunciado.cliente, 'info-cliente');
  var dataInicioTd = montaTd(anunciado.data1, 'info-dataInicio');
  var dataFimTd = montaTd(anunciado.data2, 'info-dataFim');
  var investimentoTd= montaTd(anunciado.investimento, 'info-investimento');
  var visualizacoesTd = montaTd(anunciado.visualizacoes, 'info-visualizacoes');
  var cliquesTd = montaTd(anunciado.cliques, 'info-cliques');
  var compartilhamentosTd = montaTd(anunciado.compartilhamentos, 'info-compartilhamentos')

  novoAnunciado.appendChild(novoAnuncioTd);
  novoAnunciado.appendChild(novoClienteTd);
  novoAnunciado.appendChild(dataInicioTd);    
  novoAnunciado.appendChild(dataFimTd);
  novoAnunciado.appendChild(investimentoTd);
  novoAnunciado.appendChild(visualizacoesTd);
  novoAnunciado.appendChild(cliquesTd);
  novoAnunciado.appendChild(compartilhamentosTd)
  console.log(novoAnunciado)

  return novoAnunciado;
}


function calculaInvestimento(){
    let valorInvestido = document.getElementById('valorInvestimento');
    valorInvestido = Number(valorInvestido.value);    
    const data1 = document.querySelector('[data-date-inicio]');
    const dataInicio = moment(data1.value)
    const data2 = document.querySelector('[data-date-fim]');
    const dataFim = moment(data2.value)
    dataComeco = dataInicio.format('DD/MM/YYYY');
    dataFinal = dataFim.format('DD/MM/YYYY');
    const duration = moment.duration(dataFim.diff(dataInicio));
    const qtdDias = duration.asDays(); 
  
    if(valorInvestido < 0) {
      alert("informe um valor acima de 0 por favor!")    
      return;
    } else{  
      valorInvestido = valorInvestido * qtdDias;    
}

return valorInvestido
}

let clientesClicamACada100Visualizacoes=0;
let clientesCompartilhamACada20Cliques =0;
let cliquesACada100 = 12/100;
let compartilhamentosACada20= 3/20;
let novasVisualizacoesPorCompartilhamento =0;
let cliquesPosNovosCompartilhamentos = 0;
let novosCompartilhamentos = 0;


function calculaCliques(){
  let investimento = calculaInvestimento();
  clientesVisualizamAnuncioOriginal = investimento * 30;
  clientesClicamACada100Visualizacoes = clientesVisualizamAnuncioOriginal * cliquesACada100;  
  clientesCompartilhamACada20Cliques = clientesClicamACada100Visualizacoes * compartilhamentosACada20;
  novasVisualizacoesPorCompartilhamento = clientesCompartilhamACada20Cliques * 40;
  for( i = 1; i < 4; i ++){
    for( c = 0; c < clientesCompartilhamACada20Cliques; c++) {
      novasVisualizacoesPorCompartilhamento = novasVisualizacoesPorCompartilhamento + 40;
      cliquesPosNovosCompartilhamentos = novasVisualizacoesPorCompartilhamento * cliquesACada100;
      }
    }
    cliquesPosNovosCompartilhamentos = Number(cliquesPosNovosCompartilhamentos).toFixed();
    return cliquesPosNovosCompartilhamentos
 }

 function calculaCompartilhamentos(){
  let investimento = calculaInvestimento();
  let clientesVisualizamAnuncioOriginal= 0;

  clientesVisualizamAnuncioOriginal = investimento * 30;
  clientesClicamACada100Visualizacoes = clientesVisualizamAnuncioOriginal * cliquesACada100;
  clientesCompartilhamACada20Cliques = clientesClicamACada100Visualizacoes * compartilhamentosACada20;
  novasVisualizacoesPorCompartilhamento = clientesCompartilhamACada20Cliques * 40;

  for( i = 1; i < 4; i ++){
      for( c = 0; c < clientesCompartilhamACada20Cliques; c++) {
        novasVisualizacoesPorCompartilhamento = novasVisualizacoesPorCompartilhamento + 40;
        cliquesPosNovosCompartilhamentos = novasVisualizacoesPorCompartilhamento * cliquesACada100;
        novosCompartilhamentos = cliquesPosNovosCompartilhamentos * compartilhamentosACada20;
        novosCompartilhamentos = novosCompartilhamentos.toFixed();
      }
  }
  novosCompartilhamentos = Number(novosCompartilhamentos).toFixed();
  return novosCompartilhamentos;
 }


function calculaVisualizacoes(){
  let investimento = calculaInvestimento();
  let clientesVisualizamAnuncioOriginal= 0;
  let totalVisualizacoes = 0; 

  clientesVisualizamAnuncioOriginal = investimento * 30;
  clientesClicamACada100Visualizacoes = clientesVisualizamAnuncioOriginal * cliquesACada100;
  clientesCompartilhamACada20Cliques = clientesClicamACada100Visualizacoes * compartilhamentosACada20;
  novasVisualizacoesPorCompartilhamento = clientesCompartilhamACada20Cliques * 40;

  for( i = 1; i < 4; i ++){
      for( c = 0; c < clientesCompartilhamACada20Cliques; c++) {
        novasVisualizacoesPorCompartilhamento = novasVisualizacoesPorCompartilhamento + 40;
        cliquesPosNovosCompartilhamentos = novasVisualizacoesPorCompartilhamento * cliquesACada100;
        novosCompartilhamentos = cliquesPosNovosCompartilhamentos * compartilhamentosACada20;
      }
  }

   totalVisualizacoes = Number(novasVisualizacoesPorCompartilhamento) + Number(clientesVisualizamAnuncioOriginal);
   totalVisualizacoes = totalVisualizacoes.toFixed();
   return totalVisualizacoes;
}







