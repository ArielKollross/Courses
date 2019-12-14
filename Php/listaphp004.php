<!DOCTYPE html>
<html lang="pt-br">
<head>
	<title></title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
 	<div>
 		<p>Leia dois valores inteiros e apresente a diferença do maior pelo menor.</p>

 		<?php 

 			$n1 = $_GET["a"];
 			$n2 = $_GET["b"];	

 			if($n1 > $n2){
 				echo "$n2 - $n1 = ".($n2-$n1);
 			}else{
 				echo "$n1 - $n2 = ".($n1-$n2);
 			}
 		 ?>	
 	</div>	
</body>
</html>