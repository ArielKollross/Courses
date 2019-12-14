<!DOCTYPE html>
<html>
<head>
	<title></title>
</head>
<body>
	<?php
		$time = $_GET['a']; # entrar com a quantidade de tempo ....php?a=valor
		if ($time >= 60){
		$t1 = $time/60 ;
		$t2 = $time%60 ; 
			echo "hora:".intval($t1)." : $t2 mim" ;
		} else {
			$t1 = $time;
			echo "tempo: $t1 mim";
		}
	?>
</body>
</html>