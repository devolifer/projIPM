/////
function meuteste() {
	var txt = "<div class='panel-group' id='accordion'>";
	txt += "<div class='panel panel-default'>";
	txt += "<div class='panel-heading'>";	
	txt += "<h4 align='center' class='panel-title'><a data-toggle='collapse' data-parent='#accordion' href='#collapseOne'> Ver os meus detalhes </a></h4></div>";	
	txt += "<div align='center' id='collapseOne' class='panel-collapse collapse'>";	
	txt += "<div class='panel-body col-md-4'>COMIDA</div></div></div>";	
	txt += "<div class='panel panel-default'>";	
	txt += "<div class='panel-heading'>";	
	txt += "<h4 align='center' class='panel-title'><a data-toggle='collapse' data-parent='#accordion' href='#collapseTwo'> Opções </a></h4></div>";	
	txt += "<div align='center' id='collapseTwo' class='panel-collapse collapse'>";	
	txt += "<div class='panel-body col-md-4'>Cerveja</div></div></div>";	
	document.getElementById("jumbo").innerHTML = txt;
}
///////
function menuConsumo() {
	
	var txt = "<div class="panel-group" id="accordion">";
	txt += "<div class="panel panel-default"><a data-toggle="collapse" data-parent="#accordion" href="#collapseOne"><div class="panel-heading btn-info">	<h4 align="center" class="panel-title"> Comida </h4></div> </a><div align="center" id="collapseOne" class="panel-collapse collapse">	<a href="consumos/comida.html">	<div class="panel-body col-md-4 btn-danger">		COMIDA	</div>	</a>	<div class="panel-body col-md-4 btn-success">		Carne	</div>	<div class="panel-body col-md-4">		Doces	</div>	<div class="panel-body col-md-4 btn-danger">		Sandes	</div>	<div class="panel-body col-md-4">		Carne	</div>	<div class="panel-body col-md-4">		Doces	</div>	<div class="panel-body col-md-4">		Sandes	</div>	<div class="panel-body col-md-4">		Carne	</div>	<div class="panel-body col-md-4">		Doces	</div></div></div>";
	txt += "<div class="panel panel-default"><a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo"><div class="panel-heading btn-warning">	<h4 align="center" class="panel-title"> Bebidas </h4></div> </a><div align="center" id="collapseTwo" class="panel-collapse collapse">	<div class="panel-body col-md-4">		<a href="consumos/bebida.html">Cerveja</a>	</div>	<div class="panel-body col-md-4">		Agua	</div>	<div class="panel-body col-md-4">		Whisky	</div>	<div class="panel-body col-md-4">		Cerveja	</div>	<div class="panel-body col-md-4">		Agua	</div>	<div class="panel-body col-md-4">		Whisky	</div>	<div class="panel-body col-md-4">		Cerveja	</div>	<div class="panel-body col-md-4">		Agua	</div>	<div class="panel-body col-md-4">		Whisky	</div></div></div></div>";
	
	document.getElementById("jumbo").innerHTML = txt;
}