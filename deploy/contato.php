<!DOCTYPE html>  
</body>
</html>
<html class="no-js" lang="pt-br">	
<head>

    <?php require "src/php/_inc-meta.php" ?>

    <!-- ASSETS -->
    <link rel="stylesheet" href="assets/font-awesome/font-awesome.min.css">    
    <!-- AnimaDIV -->
    <script type="text/javascript" src="assets/animadiv/animaDIV.js"></script> 
    <!-- CheckpointJS -->
    <script type="text/javascript" src="assets/checkpointjs/checkpointjs.js"></script>
    <!-- livicon -->
    <script type="text/javascript" src="assets/livicon/livicons-1.3.min.js"></script>
    <script type="text/javascript" src="assets/livicon/raphael-min.js"></script>
    <!-- livicon -->
    <script type="text/javascript" src="assets/livicon/livicons-1.3.min.js"></script>
    <script type="text/javascript" src="assets/livicon/raphael-min.javascripts"></script>    
    <!-- mascara telefone -->
    <script type="text/javascript" src="assets/mask/jquery.mask.min.js"></script>
    <!-- sweet alert -->
    <script src="assets/sweetalert/sweetalert.min.js"></script> 
    <link rel="stylesheet" type="text/css" href="assets/sweetalert/sweetalert.css">

    <!-- fontes Google -->
    
    <!-- Support old ie browsers -->
    <!--[if lt IE 9]>
        <script src="src/js/components/html5shiv.js"></script>
        <link rel="stylesheet" href="src/css/iefix.css">  
    <![endif]-->

    <script>
        $(document).ready(function() {

            //####################### 
            // JQUERY - script
            //
            // mascara para input
            //####################### 
            $("#_form1-tel").mask("(00) 0000-00009");

        });
        

    //####################### 
    // JQUERY - Send e-mail easily
    //
    // analise your form and check if is not null all element with 'form-important' class
    // this is ajax form
    //####################### 
		function enviarFormulario (formAtual) {

			// var
			var arrInput = $("#"+formAtual.id).find(".form-important");
			var totalInput = arrInput.length;
			var actionFile = formAtual.action;
				
			//verifica todos os campos necessários
			var totalInputObrigatorios = totalInput;
			
			//verifica se todos foram ocupados		
			for(var i=0 ; i<totalInput ; i++) {
				if(arrInput[i].value != "" && arrInput[i].value != null)
				{
					totalInputObrigatorios--;
				}
			}

			//verifica se completou 
			if(totalInputObrigatorios == 0) {
				
				swal("Parabéns, seu e-mail vai ser enviado!");
				//limpar campos
				for(var i=0 ; i<totalInput ; i++) {
					arrInput[i].value = "";
				}			

        var dados = jQuery( this ).serialize();
        jQuery.ajax({
            type: "POST",
            url: actionFile,
            data: dados,
            success: function( data )
            {
                alert( data );
            }
        });				
				return false;
			}
			else
			{
				swal("Preencha todos os campos!");
				return false;
			}			
		}



    </script>

</head>
<body>


    
	<!-- formulario 2 -->
	<form action="assets/phpmailer/enviar-email.php" onsubmit="return enviarFormulario(this)" id="formulario2" method="post" enctype="multipart/form-data">

		<label for="_form1-nome">Nome:</label>
	    <input type="text" placeholder="Seu nome" class="form-important"  name="_form1-nome" id="_form1-nome"> 

	    <br>
		
		<label for="_form1-email">E-mail:</label>
	    <input type="text" placeholder="Seu e-mail" class="form-important"  name="_form1-email" id="_form1-email"> 

	    <br>
	    
		<label for="_form1-estado">Estado:</label>
	    <input type="text" placeholder="Seu estado" class="form-important"  name="_form1-estado" id="_form1-estado"> 

	    <br>	    
		
		<label for="_form1-tel">Telefone:</label>
	    <input type="tel" placeholder="Seu telefone" class="form-important"  name="_form1-tel" id="_form1-tel" pattern="\([0-9]{2}\)[\s][0-9]{4}-[0-9]{4,5}"> 
	    
	    <br>
	    
	    <label for="_form1-opcao">Opção:</label>
	    <select name="_form1-opcao" class="form-important"  id="_form1-opcao">
	        <option value="">perfil</option>
	        <option value="instituicao de ensino">Instituição de Ensino</option>
	        <option value="setor publico">Setor Público</option>
	        <option value="setor privado">Setor Privado</option>
	        <option value="outros">Outros</option>
	    </select>
	    
	    <br>
		
		<label for="_form1-mensagem">Mensagem:</label>
	    <textarea name="_form1-mensagem" class="form-important"  id="_form1-mensagem"></textarea>
	    <br>
	    <button><i class="fa fa-check"></i> Registro</button>
	</form>


</body>
</html>