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
		<p>2) Crie um algoritmo que solicite a entrada de um número, e exiba a tabuada de 0 a 10 de acordo com o número solicitado </p>

		<?php
			$var = $_GET["a"];
			$i = 0;

			while ($i <= 11){
				$i++;
				echo "</br> $i x $var = ".$i * $var ;
			} 
		
		?>
	</div>
</body>
</html>