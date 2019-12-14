<!DOCTYPE html>
<html lang="pt-br">
<head>
	<title></title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
	<div>
		<p> O sistema de nota de uma instituição atribui notas aos alunos através de
				conceito. Sabendo das faixas associadas a cada conceito, faça um fluxograma (e o
				Portugol) que leia 3 notas de um aluno, calcule a média e informe a qual conceito a
				média está relacionada.
				Nota Conceito</br>
				>= 9.0 A</br>
				>= 7.5 e < 9.0 B</br>
				>= 6.0 e < 7.5 C</br>
				>= 4.0 e < 6.0 D</br>
				< 4.0 E</p>
		<?php
				$n1 = $_GET["a"]:
				$n2 = $_GET["b"]:
				$n3 = $_GET["c"]:

				$med = ($n1 + $n2 + $n3) /3.0

				if ($med >= 9.0) {
					echo "Sua média é A";
				}elseif ($med >= 7.5 && $med < 9.0){
					echo "Sue média é B";
				}elseif ($med >= 6.0 && $med < 7.5){
					echo "Sua média é C";
				}elseif ($med >= 4.0 && $med < 6.0){
					echo "Sua média é D";
				}elseif ($med < 4.0){
					echo "Sua média é E";
				}

		?>
	</div>
</body>
</html>
