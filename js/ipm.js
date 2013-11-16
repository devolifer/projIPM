$(function () {
	var musics = [
		["Música1 - Autor1", false, false, true],
		["Música2 - Autor1", false, true, false],
		["Música3 - Autor2", false, false, false],
		["Música4 - Autor3", false, false, false],
		["Música5 - Autor2", false, false, false],
		["Música6 - Autor1", false, false, false],
		["Música7 - Autor2", false, false, false]
	];

	$(".btn-vote").click(function(){
		$(this).toggleClass("disabled");
		$(this).empty();
		if($(this).hasClass("disabled")) {
			$(this).append('<input type="checkbox" name="vote" value="" checked>');
		}
		else {
			$(this).append('<input type="checkbox" name="vote" value="">');
		}
	});

	/*$(".btn-group-vote").on("click",".btn-vote", function(event) {
		var music = $(".btn-group-vote").html();
		for(var i in musics) {
			if(i[0] === music) {
				if(i[1] === true) {
					i[1] = false;
				}
				else {
					i[1] = true;
				}

				alert(i[0]+" "+i[1]);
			}
		}
	});*/

});