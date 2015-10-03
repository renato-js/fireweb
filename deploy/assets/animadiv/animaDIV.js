//animaDIV.js
// v1.0
// v1.1 - compatibilidade com mozilla e IE
 
//captura elemento pela ID

function animaDIV(_elem,_inicial,_animacao,_atenuacao,_duracao,_ocultar) {
	
	//elemento _$
	var _$ = function (_elementoID) {
		return document.getElementById(_elementoID);
	}

	//oculta inicial estado
	if(_ocultar==true)_$(_elem).style.opacity = "0";

	//executa animacao
	setTimeout(function() {
		//animacao duracao timing-funcao delay interacacao-count direcao estato
		_$(_elem).style.webkitAnimation = _animacao+" "+_duracao+"s ease-out 0s";
		_$(_elem).style.animation = _animacao+" "+_duracao+"s ease-out 0s";
		_$(_elem).style.mozAnimation = _animacao+" "+_duracao+"s ease-out 0s";

		//caso seja terminando em 0 (zero) o alpha
		setTimeout(function()
		{
			_$(_elem).style.opacity = "";
		}, _duracao*1000);
		
	}, _inicial*1000);

	//console.log("s");
}