///////
function menuCompraDrink() {
	var Ctopo = "<li class='btn-primary'><a onclick='menuMenu()'>Menu</a></li><li class='active'><a>Consumo</a></li>";
	document.getElementById('topo').innerHTML = Ctopo;
	var txt = "<div class='panel-group'><div class='panel panel-heading'><div class='thumbnail col-sm-4'><img align='center' ";
	txt += "src='../img/beer.jpg' alt='imagem fugiu'><h5 align='center'>Cerveja</h5></div><ul class='panel nav col-sm-8 '><div class='panel-heading col-sm-5'>												Designação/Custo</div><ul class=' navbar-left col-sm-8  scrollmenu'><div class='dropdown open'><ul class='dropdown-menu col-sm-12'><li><a style='background-color: blue;' href=''><tr><td align='left'>0,33cl Sagres</td><td align='right' >1.00€</td></tr></a></li><li><a href=''><tr><td align='left'>imperial outra</td><td align='right' >1.80€</td></tr></a></li><li><a href=''><tr><td align='left'>imperial outra</td><td align='right' >1.80€</td></tr></a></li><li><a href=''><tr><td align='left'>imperial outra</td><td align='right' >1.80€</td></tr></a></li><li><a href=''><tr><td align='left'>imperial outra</td><td align='right' >1.80€</td></tr></a></li></ul></div></ul><div align='center' class='panel col-sm-4 navbar-right'><button onclick='document.getElementById('quantitativo').innerHTML = '2';' class='col-sm-12  btn-success btn-lg'  type='button'>											+1</button><label id='quantitativo' onclick='' class='col-sm-12  disabled label label-info' >1</label><button onclick='document.getElementById('quantitativo').innerHTML = '1';' class='col-md-12  btn-danger btn-lg'  type='button'>											-1</button></div></ul></div><div class='panel'><button onclick='ativaBebida()' class='col-md-6 small alert-success'  type='button'>									Pagar na entrega</button><button class='col-md-6 small alert-warning' type='button'>Pagar mais tarde</button></div></div>";
	document.getElementById('jumbo').innerHTML = txt;
}
function menuCompraFood() {
	var Ctopo = "<li class='btn-primary'><a onclick='menuMenu()'>Menu</a></li><li class='active'><a>Consumo</a></li>";
	document.getElementById('topo').innerHTML = Ctopo;
	var txt = "<div class='panel-group'><div class='panel panel-heading'><div class='thumbnail col-sm-4'><img align='center' src='../img/hamburger.png' alt='imagem fugiu'><h5 align='center'>Hamburguer</h5></div><ul class='panel nav col-sm-8 '><div class='panel-heading col-sm-5'>												Designação/Custo</div><ul class=' navbar-left col-sm-8  scrollmenu'><div class='dropdown open'><ul class='dropdown-menu col-sm-12'><li><a style='background-color: blue;' href=''><tr><td align='left'>hamburguer</td><td align='right' >1.00€</td></tr></a></li><li><a href=''><tr><td align='left'>outra sandes</td><td align='right' >1.80€</td></tr></a></li><li><a href=''><tr><td align='left'>outra sandes</td><td align='right' >1.80€</td></tr></a></li><li><a href=''><tr><td align='left'>outra sandes</td><td align='right' >1.80€</td></tr></a></li><li><a href=''><tr><td align='left'>outra sandes</td><td align='right' >1.80€</td></tr></a></li></ul></div></ul><div align='center' class='panel col-sm-4 navbar-right'><button onclick='document.getElementById('quantitativo').innerHTML = '2';' class='col-sm-12  btn-success btn-lg'  type='button'>											+1</button><label id='quantitativo' onclick='' class='col-sm-12  disabled label label-info' >1</label><button onclick='document.getElementById('quantitativo').innerHTML = '1';' class='col-md-12  btn-danger btn-lg'  type='button'>											-1</button></div></ul></div><div class='panel'><button onclick='ativaComida()' class='col-md-6 small alert-success'  type='button'>									Pagar na entrega</button><button class='col-md-6 small alert-warning' type='button'>									Pagar mais tarde</button></div></div></div>";
	document.getElementById('jumbo').innerHTML = txt;
}

///////
function menuConsumo() {
	var Ctopo = "<li class='btn-primary'><a onclick='menuMenu()'>Menu</a></li><li class='active'><a>Consumo</a></li>";
	document.getElementById('topo').innerHTML = Ctopo;
	var txt = "<div class='panel-group' id='accordion'>";
	txt += "<div class='panel panel-default'><a data-toggle='collapse' data-parent='#accordion' href='#collapseOne'><div class='panel-heading'>	<h4 align='center' class='panel-title'> Comida </h4></div> </a><div align='center' id='collapseOne' class='panel-collapse collapse'>	<a onclick=";
	txt +="'menuCompraFood()'>	";
	txt += "<div class='panel-body col-md-4 btn-danger'>		COMIDA	</div>	</a>	<div class='panel-body col-md-4 btn-success'>		Carne	</div>	<div class='panel-body col-md-4'>		Doces	</div>	<div class='panel-body col-md-4 btn-danger'>		Sandes	</div>	<div class='panel-body col-md-4'>		Carne	</div>	<div class='panel-body col-md-4'>		Doces	</div>	<div class='panel-body col-md-4'>		Sandes	</div>	<div class='panel-body col-md-4'>		Carne	</div>	<div class='panel-body col-md-4'>		Doces	</div></div></div>";
	txt += "<div class='panel panel-default'><a data-toggle='collapse' data-parent='#accordion' href='#collapseTwo'><div class='panel-heading'>	<h4 align='center' class='panel-title'> Bebidas </h4></div> </a><div align='center' id='collapseTwo' class='panel-collapse collapse'>	<div class='panel-body col-md-4'>		<a onclick='menuCompra('sagres')'>Cerveja</a>	</div>	<div class='panel-body col-md-4'>		Agua	</div>	<div class='panel-body col-md-4'>		Whisky	</div>	<div class='panel-body col-md-4'>		Cerveja	</div>	<div class='panel-body col-md-4'>		Agua	</div>	<div class='panel-body col-md-4'>		Whisky	</div>	<div class='panel-body col-md-4'>		Cerveja	</div>	<div class='panel-body col-md-4'>		Agua	</div>	<div class='panel-body col-md-4'>		Whisky	</div></div></div></div>";
	
	document.getElementById('jumbo').innerHTML = txt;
}
///////
function menuMusica() {
	var Ctopo = "<li class='btn-primary'><a onclick='menuMenu()'>Menu</a></li><li class='active'><a>Music</a></li>";
	document.getElementById('topo').innerHTML = Ctopo;
	var txt = "<div align='center' class='row'><img src='../img/dj-hero.jpg' alt='imagem fugiu'><h4 align='center'>A tocar:</h4><h5 align='center'><i>Dj hero</i></h5><button onclick='ativaMplayer()' type='button' class='btn col-sm-12 btn-lg' id='togglerMP'>acompanhar música</button></div>";
	document.getElementById('jumbo').innerHTML = txt;
}
///////
function menuMapa() {
	var Ctopo = "<li class='btn-primary'><a onclick='menuMenu()'>Menu</a></li><li class='active'><a>Cantos do Bar</a></li>";
	document.getElementById('topo').innerHTML = Ctopo;
	var txt = "<div class='row'>";
	txt += "<div class='col-6 col-sm-4 col-lg-3'><a ><div class='thumbnail'>	<h4 align='center'>Casa de banho</h4>	<img src='../img/toilets.png' alt='imagem fugiu'></div> </a></div><!--/span-->";
	txt += "<div class='col-6 col-sm-4 col-lg-3'><a href='cantos/bilhar.html'><div class='thumbnail'>	<h4 align='center'>Mesas de bilhar</h4>	<img src='../img/snooker.jpg' alt='imagem fugiu'></div> </a></div>";
	txt += "<div class='col-6 col-sm-4 col-lg-3'><a ><div class='thumbnail'>	<h4 align='center'>Space Invaders</h4>	<img src='../img/spaceInv.jpg' alt='imagem fugiu'></div> </a></div>";
	txt += "<div class='col-6 col-sm-4 col-lg-3'><a ><div class='thumbnail'>	<h4 align='center'>Space Invaders</h4>	<img src='../img/spaceInv.jpg' alt='imagem fugiu'></div> </a></div>";
	txt += "<div class='col-6 col-sm-4 col-lg-3'><a ><div class='thumbnail'>	<h4 align='center'>Space Invaders</h4>	<img src='../img/spaceInv.jpg' alt='imagem fugiu'></div> </a></div>";
	txt += "<div class='col-6 col-sm-4 col-lg-3'><a ><div class='thumbnail'>	<h4 align='center'>Space Invaders</h4>	<img src='../img/spaceInv.jpg' alt='imagem fugiu'></div> </a></div></div>";
	document.getElementById('jumbo').innerHTML = txt;
}
///////
function menuUser() {
	var Ctopo = "<li class='btn-primary'><a onclick='menuMenu()'>Menu</a></li><li class='active'><a>Conta de utilizador</a></li>";
	document.getElementById('topo').innerHTML = Ctopo;
	var txt = "<div class='panel-group' id='accordion'><div class='panel panel-default'><div class='panel-heading'><h4 align='center' class='panel-title '><a data-toggle='collapse' data-parent='#accordion' href='#collapseOne'> Ver os meus detalhes </a></h4></div>";
	txt += "<div align='center' id='collapseOne' class='panel-collapse collapse'><div class='panel-body col-md-4'>COMIDA</div></div></div>";
	txt += "<div class='panel panel-default'><div class='panel-heading'><h4 align='center' class='panel-title'><a data-toggle='collapse' data-parent='#accordion' href='#collapseTwo'> Opções </a></h4></div>";
	txt += "<div align='center' id='collapseTwo' class='panel-collapse collapse'><div class='panel-body col-md-4'>Cerveja</div></div></div></div>";
	document.getElementById('jumbo').innerHTML = txt;
}
///////
function menuMenu() {
	var Ctopo = "<li class='active'><a onclick='menuMenu()'>Menu</a></li>";
	document.getElementById('topo').innerHTML = Ctopo;
	var txt = "<div align='center'  class='list-group'><a onclick='menuConsumo()' class='list-group-item'>Consumir</a>";
	txt += "<a onclick='menuMapa()' class='list-group-item'>Lugares</a><a onclick='menuMusica()' class='list-group-item'>Música</a>";
	txt += "<a onclick='menuUser()'' class='list-group-item'>Ver detalhes</a></div>";
	document.getElementById('jumbo').innerHTML = txt;
}
