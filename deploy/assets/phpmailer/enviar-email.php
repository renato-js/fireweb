<?php
	
	// busca informaçoes
	$nome = $_POST["form1_nome"];
	$email = $_POST["form1_email"];
	$telefone = $_POST["form1_telefone"];
	$opcao = $_POST["form1_opcao"];
	$mensagem = $_POST["form1_mensagem"];

	// Inclui o arquivo class.phpmailer.php localizado na pasta phpmailer
	// require_once("../phpmailer/class.phpmailer.php");
	require_once("PHPMailerAutoload.php");

	// Inicia a classe PHPMailer
	$mail = new PHPMailer();

	// Define os dados do servidor e tipo de conexão
	// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
	$mail->IsSMTP(); // Define que a mensagem será SMTP
	$mail->Host = "mail.gmail.com.br"; // Endereço do servidor SMTP
	//$mail->SMTPAuth = true; // Usa autenticação SMTP? (opcional)
	//$mail->Username = 'seumail@dominio.net'; // Usuário do servidor SMTP
	//$mail->Password = 'senha'; // Senha do servidor SMTP

	// Define o remetente
	// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
	$mail->From = "renatojs.webaula@gmail.com"; // Seu e-mail
	$mail->FromName = "Contato - site"; // Seu nome

	// Define os destinatário(s)
	// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
	$mail->AddAddress('renatojs.webaula@gmail.com', 'Contato Host');
	// $mail->AddAddress('renato.santos@host.com.br');
	//$mail->AddCC('ciclano@site.net', 'Ciclano'); // Copia
	//$mail->AddBCC('fulano@dominio.com.br', 'Fulano da Silva'); // Cópia Oculta

	// Define os dados técnicos da Mensagem
	// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
	$mail->IsHTML(true); // Define que o e-mail será enviado como HTML
	//$mail->CharSet = 'iso-8859-1'; // Charset da mensagem (opcional)

	// Define a mensagem (Texto e Assunto)
	// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
	$bodyMsg = '	
	<table border="0" width="100%">
		<tr  style="background-color: #1F60C0; color:white; ">
			<td colspan="3" style="padding:10px 0px; text-align: center">Contato por e-mail</td>
		</tr>
		<tr style="background-color: #c7c7c7">
			<td>Nome</td>
			<td>E-mail</td>
			<td>Telefone</td>
		</tr>
		<tr>
			<td>'.$nome.'</td>
			<td>'.$email.'</td>
			<td>'.$telefone.'</td>
		</tr>
		<tr>
			<td colspan="3" style="padding:10px 0px; text-align: center; background-color: #fff;">'.$mensagem.'</td>
		</tr>
		<tr>
			<td colspan="3" style="padding:10px 0px; text-align: center; background-color: #F0F0F0;">Contato do site</td>
		</tr>
	</table>';

	$mail->Subject  = "Solicitação de contato por e-mail"; // Assunto da mensagem
	$mail->Body = $bodyMsg;
	$mail->AltBody = $bodyMsg;

	// Define os anexos (opcional)
	// =-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=
	//$mail->AddAttachment("c:/temp/documento.pdf", "novo_nome.pdf");  // Insere um anexo

	// Envia o e-mail
	$enviado = $mail->Send();

	// Limpa os destinatários e os anexos
	$mail->ClearAllRecipients();
	$mail->ClearAttachments();

	// Exibe uma mensagem de resultado
	if ($enviado) {
	  echo "E-mail enviado com sucesso!";
	} else {
	  echo "Não foi possível enviar o e-mail.";
	  echo "<b>Informações do erro:</b> " . $mail->ErrorInfo;
	}

