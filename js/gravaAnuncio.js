const todasTarefas = document.querySelector('.js-todas-tarefas');

new function (){
    mostraTarefa();
}

function mostraTarefa() {
    if(localStorage.length == 0) {
        return
    }
    let tarefas = [];
    for(let i = 0; i < localStorage.length; i ++){
        tarefas.push(JSON.parse(localStorage.getItem(i)))
    }
    tarefas.forEach(tarefa=> {
        todasTarefas.innerHTML += montaTrDoForm(tarefa);
        const codigoHtml = todasTarefas.querySelector(`[data-id="${tarefa.id}"]`);
        
    })   

}

function montaTrDoForm(tarefa) {
    let cartao = `<tbody class="tabela data-id="${tarefa.id}">
    <tr class="anuncio table-item">
    <td class="nomeAnuncio info-anuncio">${tarefa.detalhesDoForm.anuncio}</td>
    <td class="nomeCliente info-cliente">${tarefa.detalhesDoForm.cliente}</td>
    <td class="dataInicio info-dataInicio">${tarefa.detalhesDoForm.data1}</td>    
    <td class="info-dataFim">${tarefa.detalhesDoForm.data2}</td>
    <td class="investimento info-investimento">R$${tarefa.detalhesDoForm.investimento}</td>
     <td class="info-visualizacoes">${tarefa.detalhesDoForm.visualizacoes}</td>
     <td class="info-cliques">${tarefa.detalhesDoForm.cliques}</td>
     <td class="info-compartilhamentos">${tarefa.detalhesDoForm.compartilhamentos}</td>
    </tr>`
    console.log(tarefa)
    return cartao;
}
