let campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
  console.log(this.value)
  let anuncios = document.querySelectorAll(".anuncio");
  if(this.value.length > 0) {
  for(let i = 0; i < anuncios.length; i++) {
    let anuncio = anuncios[i];
    let tdNomeDoAnuncio = anuncio.querySelector(".nomeAnuncio");
    let nomeDoAnuncio = tdNomeDoAnuncio.textContent;
    let expressao = new RegExp(this.value,"i");
    if(!expressao.test(nomeDoAnuncio)) {
      anuncio.classList.add("invisivel")
    }else {
      anuncio.classList.remove("invisivel")
    }
  }
}else{
  for(var i =0; i < anuncios.length; i++) {
    var anuncio = anuncios[i];
    anuncio.classList.remove("invisivel");
  }
}
})

let campoFiltroData = document.querySelector('#filtrar-tabela-porData');
campoFiltroData.addEventListener("input", function() {
  let anuncios = document.querySelectorAll(".anuncio");
  if(this.value.length > 0) {
  for(let i = 0; i < anuncios.length; i++) {
    let anuncio = anuncios[i];
    let tdData = anuncio.querySelector(".dataInicio");
    let data = tdData.textContent;
    
    if(tdData == data) {
      anuncio.classList.add("invisivel")      
    }else {
      anuncio.classList.remove("invisivel")
    }
  }
}else{
  for(var i =0; i < anuncios.length; i++) {
    var anuncio = anuncios[i];
    anuncio.classList.remove("invisivel");
  }
}
})