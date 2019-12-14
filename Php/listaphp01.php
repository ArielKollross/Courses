<!DOCTYPE html>
<html lang="pt-br">
<head>
	<title>Lista exe01</title>
	<meta charset="utf-8">
	<style>
		body{
			background-color: grey;
			}
		div{
			color: white;
			background-color: black;
			font-size: 15pt;
			width: 1000px;
			height: 500px;
			padding: 50px;
			margin: 25px;
			}
		}
	</style>
</head>
<body>
	<div>
		<p>1) - Crie um algoritmo que receba um número digitado pelo usuário e verifique se esse valor é positivo, negativo ou igual a zero. A saída deve ser: "Valor Positivo", "Valor Negativo" ou "Igual a Zero".</p>

		<?php  
			$var = $_GET["a"];

				if ($var > 0){
					echo " $var é maior que 0";
				}elseif($var < 0){
					echo"$var é menor que 0";
				}elseif ($var == 0) {
					echo "$var é igual a zero";
				}
		?>
	</div>
</body>
</html>