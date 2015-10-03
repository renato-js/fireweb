// PRE LOADER EM IMAGENS - 
// imgPreload.js
// 

		//
		function preloadImg() {

						// Nao definindo o width e heigth dos objetos, nao eh mostrado o pre loader 

          		// pre loader de todas as imagens
          		var newImagesObj = [];                  															// todas as novas imagens em objeto
          		 var imgCarregar = [];                   															// todos os elementos img com classe
          		var srcSequencia = [];                  															// todos os src (data-load) originais
          		   var bodyChild = document.getElementsByClassName("imgpreload");				//busca todos os elementos com  imgpreload com classe
			
				alert("initi");
		
        // armazena src originai (data-load) e cria novas imagens como objetos
        for (i=0 ; i < bodyChild.length ; i ++) {
            newImagesObj[i] = new Image();
            newImagesObj[i].id = i;
            newImagesObj[i].src = "img/theme/clear.gif";
            imgCarregar[i] = bodyChild[i];
            imgCarregar[i].src = "img/theme/clear.gif";
            imgCarregar[i].style.background = "url('img/theme/loading.gif') 50% no-repeat";
            srcSequencia[i] = imgCarregar[i].dataset.load;
            //console.log(imgCarregar[i].height);
        }

				// evento onload em cada elemento
        for (i=0 ; i < bodyChild.length ; i ++) {

            newImagesObj[i].onload = function(){

                imgCarregar[this.id].src = srcSequencia[this.id];
                imgCarregar[this.id].className = imgCarregar[this.id].className+" animm";				// adiciona mais classe
            };
        }
		}();


