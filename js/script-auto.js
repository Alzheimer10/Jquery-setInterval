$(document).ready(function() {  
	function agitar(){  
		$('h1').effect( "bounce", "slow" );
		$valor = parseInt($('label').text()) +1;
		$('label').text($valor); 
	}
    setInterval(agitar, 1000); //INTERVALO EN MILISEGUNDOS. 1000ms = 1s
});