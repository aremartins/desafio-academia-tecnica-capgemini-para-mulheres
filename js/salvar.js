const botaoSalvarLocal = document.querySelector('[data-save]');
const tr = document.querySelector('tr');
const td = document.querySelector('td');
const formulario = document.querySelector('form');
const data1 = document.querySelector('[data-date-inicio');
const data2 = document.querySelector('[data-date-fim]');
const anuncioNome = formulario.querySelector('[data-anuncio]')
const clienteNome = formulario.querySelector('[data-name]')
const investimentoForm = calculaInvestimento()
const visualizacoes = Number(calculaVisualizacoes())
const cliques = calculaCliques()
const compartilhamentos = calculaCompartilhamentos()


botaoSalvarLocal.addEventListener('click', () => {
    if(typeof(Storage) !== "undefined") {
        console.log("suporta LocalStorage");
        const formulario = montaForm();
        salvaLocalStorage(formulario);
        console.log(formulario)
    } else {
        console.log("Não suporta LocalStorage");
    }
});

function montaForm(){
    let formulario = {
        "id" : atributoId(),
        "detalhesDoForm":{
            "anuncio" : anuncioNome.value,
            "cliente" : clienteNome.value,
            "data1": moment(form.dataInicio.value).format('DD/MM/YYYY'),
            "data2": moment(form.dataFim.value).format('DD/MM/YYYY'),
            "investimento": calculaInvestimento(),
            "visualizacoes": calculaVisualizacoes(),
            "cliques": calculaCliques(),
            "compartilhamentos": calculaCompartilhamentos()
        }      

    }
    return formulario
}

numeroId = 1;
if(localStorage.length > 0){
    numeroId = localStorage.length;
}

function atributoId() {
    if (localStorage.length == 0){
        return 0
    } else {
        if (localStorage.length == numeroId) {
            let novoId = numeroId;
            numeroId ++;
            return novoId
        }
    }
}

function salvaLocalStorage(objetoJson) {
    localStorage.setItem(objetoJson.id, JSON.stringify(objetoJson))
}










// const cadastrar = document.querySelector('[data-save]');
// const tituloAnuncio = document.querySelector('[data-anuncio]');
// const nomeCliente = document.querySelector('[data-name]');
// const dinheiro = investimento();
// const visualizaram = `${totalVisualizacoes}`;
// const clicaram = `${cliquesPosNovosCompartilhamentos}`;
// const compartilharam = `${novosCompartilhamentos}`;

// cadastrar.addEventListener('click', () => {
//   if(typeof(Storage) !== "undefined") {
//     const relatorio = montaRelatorio();
//   } else {
//     console.log("não suporta o localstorage")
//   }
// });

// function montaRelatorio() {
//   let relatorio = {
//       detalhesRelatorio : {
//         'titulo' : tituloAnuncio.value,
//         'nome' : nomeCliente.value,
//         'investiram' : dinheiro,
//         'totalVisualizaram' : visualizaram,
//         'totalClicaram' : clicaram,
//         'totalCompartilharam': compartilharam
//       }
//   }
// }