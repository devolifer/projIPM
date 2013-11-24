///////////atoms cookies
function createCookie(name, value, days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
		var expires = "; expires=" + date.toGMTString();
	} else
		var expires = "";
	document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ')
		c = c.substring(1, c.length);
		if (c.indexOf(nameEQ) == 0)
			return c.substring(nameEQ.length, c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name, "", -1);
}

/////////////////
///////////gerir sidebar
function resetCookie() {
	eraseCookie('SBstatus');
	createCookie('SBstatus', 'on', 1);
}

////////
function checkCookie() {
	var theCookie = readCookie('SBstatus');

	if (theCookie != null && theCookie != "" && theCookie == 'off') {
		document.getElementById("botaoNOTBAR").innerHTML = "Ver notificações »»";
		document.getElementById("esconde").setAttribute("class", "list-group collapse");
		document.getElementById("debugger").innerHTML = "off!";
	} else if (theCookie != null && theCookie != "" && theCookie == 'on') {
		document.getElementById("botaoNOTBAR").innerHTML = "Esconder notificações ««";
		document.getElementById("esconde").setAttribute("class", "list-group collapse in");
		document.getElementById("debugger").innerHTML = "on!";
	} else {
		document.getElementById("debugger").innerHTML = "wut!";
	}

	theCookie = readCookie('FOODstatus');
	if (theCookie != null && theCookie != "" && theCookie == 'off') {
		document.getElementById("comida").setAttribute("class", "list-group-item hide");
		document.getElementById("debugger").innerHTML = "esconder comida";
	} else if (theCookie != null && theCookie != "" && theCookie == 'on') {
		document.getElementById("comida").setAttribute("class", "list-group-item");
		document.getElementById("debugger").innerHTML = "mostro comida";
	} else {
		document.getElementById("debugger").innerHTML = "n faço nada";
	}

	theCookie = readCookie('DRINKstatus');
	if (theCookie != null && theCookie != "" && theCookie == 'off') {
		document.getElementById("bebida").setAttribute("class", "list-group-item hide");
		document.getElementById("debugger").innerHTML = "esconder bebida";
	} else if (theCookie != null && theCookie != "" && theCookie == 'on') {
		document.getElementById("bebida").setAttribute("class", "list-group-item");
		document.getElementById("debugger").innerHTML = "mostro bebida";
	} else {
		document.getElementById("debugger").innerHTML = "n faço nada";
	}

	theCookie = readCookie('MUSICstatus');
	if (theCookie != null && theCookie != "" && theCookie == 'off') {
		document.getElementById("mplayer").setAttribute("class", "list-group-item hide");
		document.getElementById("togglerMP").setAttribute("class", "btn col-sm-12 btn-lg btn-info");
		document.getElementById("debugger").innerHTML = "esconder mplayer";
		document.getElementById("togglerMP").innerHTML = "Acompanhar música";
	} else if (theCookie != null && theCookie != "" && theCookie == 'on') {
		document.getElementById("mplayer").setAttribute("class", "list-group-item");
		document.getElementById("togglerMP").setAttribute("class", "btn col-sm-12 btn-lg btn-success");
		document.getElementById("debugger").innerHTML = "mostro mplayer";
		document.getElementById("togglerMP").innerHTML = "Deixar de acompanhar música";
	} else {
		document.getElementById("debugger").innerHTML = "n faço nada";
	}

	theCookie = readCookie('ROWstatus');
	if (theCookie != null && theCookie != "" && theCookie == 'off') {
		document.getElementById("fila").setAttribute("class", "list-group-item hide");
		document.getElementById("debugger").innerHTML = "esconder fila";
	} else if (theCookie != null && theCookie != "" && theCookie == 'on') {
		document.getElementById("fila").setAttribute("class", "list-group-item");
		document.getElementById("debugger").innerHTML = "mostro fila";
	} else {
		document.getElementById("debugger").innerHTML = "n faço nada";
	}
}

////////
function toggleBotao() {
	var theCookie = readCookie('SBstatus');

	if (theCookie != null && theCookie != "" && theCookie == 'on') {
		document.getElementById("debugger").innerHTML = "off?";
		createCookie('SBstatus', 'off', 1);
	} else if (theCookie != null && theCookie != "" && theCookie == 'off') {
		document.getElementById("debugger").innerHTML = "on?";
		createCookie('SBstatus', 'on', 1);
	} else {
		document.getElementById("debugger").innerHTML = "erro?";
		resetCookie();
	}
	checkCookie();
}

///////////gerir entradas
/*o truqe vai ser que existem apenas 4 entradas declaras, q estarao hide em todas as interfaces que requiram
* o checkcookies vai ver todas as cookies que serao um total de 5 ate agora, para cada pagina
*
*/
//entrada comida: encomendou um hamburguer
function ativaComida() {
	var theCookie = readCookie('FOODstatus');

	if (theCookie != null && theCookie != "" && theCookie == 'on') {
		document.getElementById("debugger").innerHTML = "carregado duas vezes";
		alert();
	} else if (theCookie != null && theCookie != "" && theCookie == 'off') {
		document.getElementById("debugger").innerHTML = "ele estava off";

		createCookie('FOODstatus', 'on', 1);
	} else {
		document.getElementById("debugger").innerHTML = "recebido pedido comida";
		createCookie('FOODstatus', 'on', 1);
	}
	var r = confirm("Confirmar pedido 1x Hamburguer");
	if (r == true) {
		document.getElementById("debugger").innerHTML = "confirmado";
	} else {
		createCookie('FOODstatus', 'off', 1);
	}
	checkCookie();
}

//entrada bebida: encomendou duas cervejas
function ativaBebida() {
	var theCookie = readCookie('DRINKstatus');

	if (theCookie != null && theCookie != "" && theCookie == 'on') {
		document.getElementById("debugger").innerHTML = "carregado duas vezes";
		alert();
	} else if (theCookie != null && theCookie != "" && theCookie == 'off') {
		document.getElementById("debugger").innerHTML = "ele estava off";
		createCookie('DRINKstatus', 'on', 1);
	} else {
		document.getElementById("debugger").innerHTML = "recebido pedido comida";
		createCookie('DRINKstatus', 'on', 1);
	}
	checkCookie();
}

//entrada mplayer: esta a acompanhar a musica a tocar
function ativaMplayer() {
	var theCookie = readCookie('MUSICstatus');

	if (theCookie != null && theCookie != "" && theCookie == 'on') {
		document.getElementById("debugger").innerHTML = "carregado duas vezes";
		createCookie('MUSICstatus', 'off', 1);
	} else if (theCookie != null && theCookie != "" && theCookie == 'off') {
		document.getElementById("debugger").innerHTML = "ele estava off";
		createCookie('MUSICstatus', 'on', 1);
	} else {
		document.getElementById("debugger").innerHTML = "recebido pedido comida";
		createCookie('MUSICstatus', 'on', 1);
	}
	checkCookie();
}

//entrada fila: user esta a espera pela sua vez de jogar bilhar
function ativaFila() {
	var theCookie = readCookie('ROWstatus');

	if (theCookie != null && theCookie != "" && theCookie == 'on') {
		document.getElementById("debugger").innerHTML = "carregado duas vezes";
		alert();
	} else if (theCookie != null && theCookie != "" && theCookie == 'off') {
		document.getElementById("debugger").innerHTML = "ele estava off";
		createCookie('ROWstatus', 'on', 1);
	} else {
		document.getElementById("debugger").innerHTML = "recebido pedido comida";
		createCookie('ROWstatus', 'on', 1);
	}
	checkCookie();
}

/*
 function addConsumo() {

 function
 var para = document.createElement("a");
 para.setAttribute("class", "list-group-item");
 var node = document.createTextNode("incrtester");
 para.appendChild(node);

 var element = document.getElementById("esconde");
 element.appendChild(para);
 addEntry()

 }
 */