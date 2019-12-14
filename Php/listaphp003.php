<!DOCTYPE html>
<html lang="pt-br">
<head>
	<title>Exe 003</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
	<div>
		<p>3) Crie um algoritmo que solicite um número, e faça o cálculo fatorial do mesmo, exiba o resultado na tela.</p>

		<?php

			$entrada = $_GET['a'];
			$var = $entrada;

			for($i = ($var - 1) ; $i > 0; $i--){ 
			 		$var = $var * $i;
			 	 } 
			echo "$entrada ! = $re";
		?>
	</div>
</body>
</html>