/*
/ * checkpointJS.js 3.1
/ *
/ * @author: Renato Santos
/ * www.grupoartway.com.br
/ * github.com/renato-js/checkpointjs
/ * Date 09/09/2013
/ * Date 11/09/2013
/ * Date 27/09/2013
/ * Date 21/10/2013
// v2.4 - it's not more Jquery plugin, add this in all your project without Jquery library!
// v3.0 - you can apply a function to many ID elements on you page. This events can be call once.
// v3.1 - add function BEFORE. Now you can call some function before the scrool down
*/ 


;(function (window,document,undefined) {
	
	var sElementos = [], 		// array all elements
		sOffsets = [], 			// array all offsets
		sFuncoes = [],			// array all functions
		isIE =  window.attachEvent ? isIE=true : isIE=false,					// true é ie	
		
		//it do the same as $ Jquery operator, but... very simplify
		_$ = function (_elementoID) {return document.getElementById(_elementoID);}

	//constructor
	checkpointjs = function (parameters) {

		if (isIE) {
			window.attachEvent("onscroll",checkpointjs.checaAnimacaoIe);			
		}
		else {
			window.addEventListener("scroll",checkpointjs.checaAnimacao, false);
		}

		//execute function before
		if(parameters.before != undefined) parameters.before();		

		//update vars
		sElementos[sElementos.length] = _$(parameters.elem);		//get element
		sOffsets[sOffsets.length] = parameters.offset;					//get offset
		//if offset is undefined
		sFuncoes[sFuncoes.length] = parameters.after;					//get function call after offset is complete
		
	}

	//check scrolling - All Browser
	checkpointjs.checaAnimacao = function () {

		for(i=0 ; i<sElementos.length ; i++)
		{
			//get document bottom offset
	 	 	var posX = (document.body.scrollTop) - (sElementos[i].offsetTop) + (window.innerHeight);

		 	//check if offset is same one element
			if(posX >= sOffsets[i])
			{
				console.log(sElementos);
				//call function defined by you and clear arrays
				sFuncoes[i]();
				sFuncoes.shift();
				sElementos.shift();
				sOffsets.shift();
				scrollStop();
			}
		}
	}


	//check scrolling - Internet Explorer
	checkpointjs.checaAnimacaoIe = function () {

		for(i=0 ; i<sElementos.length ; i++)
		{
	 	 	//get document bottom offset
	 	 	var posX = (document.documentElement.scrollTop) - (sElementos[i].offsetTop) + (window.innerHeight);

		 	//check if offset is same one element
			if(posX >= sOffsets[i])
			{
				//call function defined by you and clear arrays
				sFuncoes[i]();
				sFuncoes.shift();
				sElementos.shift();
				sOffsets.shift();
				scrollStop ();
			}
		}
	}

	//clear scrolling event
	function scrollStop () {
		if(sElementos.length == 0)
		{
			if(isIE)window.detachEvent("onscroll",checkpointjs.checaAnimacao);	//limpa listener event
			if(!isIE)window.removeEventListener("scroll",checkpointjs.checaAnimacao,false);	//limpa listener event
		}
	}
})(window,document);

