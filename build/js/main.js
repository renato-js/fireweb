// Primeira chamada Jquery para a aplicação
$(document).ready(function($) {

    //####################### 
    // JAVASCRIPT - preloader em imagem
    //
    // adicionando a  classe imgpreload em uma imagem com data-load, o preload acontece
    // <img id="imagem1" class="imgpreload"  src="#" data-load="minha-imagem.jpg"  width="500"  height="500">
    //####################### 
        // pre loader de todas as imagens
        var newImagesObj = [];                                                                              // todas as novas imagens em objeto
         var imgCarregar = [];                                                                              // todos os elementos img com classe
        var srcSequencia = [];                                                                              // todos os src (data-load) originais
           var bodyChild = document.getElementsByClassName("imgpreload");               //busca todos os elementos com  imgpreload com classe
    
    // armazena src originai (data-load) e cria novas imagens como objetos
    for (i=0 ; i < bodyChild.length ; i ++) {
        newImagesObj[i] = new Image();
        newImagesObj[i].id = i;
        newImagesObj[i].src = "img/theme/clear.gif";
        imgCarregar[i] = bodyChild[i];
        imgCarregar[i].src = "img/theme/clear.gif";
        imgCarregar[i].style.background = "url('img/theme/loading.gif') 50% no-repeat";
        srcSequencia[i] = imgCarregar[i].dataset.load;
    }

    // evento onload em cada elemento
    for (i=0 ; i < bodyChild.length ; i ++) {
        newImagesObj[i].onload = function(){
            imgCarregar[this.id].src = srcSequencia[this.id];
        };
    }
}); // end Jquery ready