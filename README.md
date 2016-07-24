# Jquery-setInterval
timer con setInterval en Jquery
-----
setInterval es una función propia de Javascript, su funcionamiento es crear un intervalo de tiempo en milisegundos que no se dentendrá hasta no haber hecho una llamada a la función clearInterval.


Jquery
-----
```html
<script>
  $(document).ready(function() {  
  	function agitar(){  
  		$('h1').effect( "bounce", "slow" );
  		$valor = parseInt($('label').text()) +1;
  		$('label').text($valor); 
  	}
      setInterval(agitar, 1000); //INTERVALO EN MILISEGUNDOS. 1000ms = 1s
  });
</script>
```

Html
-----
```html
		<section>
			<h1>JQUERY-AUTO <label>0</label></h1> 
			<div class="content">
				<p>
				<b>El H1 se agitara cada 1segundo automaticamente</p>
			</div>
		</section>
	    <script src='js/jquery.min.js' type="text/javascript"></script>
	    <script src='js/jquery-ui.js' type="text/javascript"></script>
	    <script src='js/script-auto.js' type="text/javascript"></script>
```

Carlos Anselmi
