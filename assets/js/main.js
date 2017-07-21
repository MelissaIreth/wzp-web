$(document).ready(function(){
	$('.input-chat').keydown(function(e) {
	var key = e.which;
	var msg = $(".input-chat").val();
		if (key == 13 && msg != "") {
			$(".texto-conversacion").prepend("<span class='texto-ingresado'><p>"+msg+"</p></span>")
			$(".input-chat").val("")
		}
	});

	$(".fa-comment").click(function(event) {
		var msg = $(".input-chat").val();
		if(msg != ""){
			$(".texto-conversacion").prepend("<span class='texto-ingresado'><p>"+msg+"</p></span>")
			$(".input-chat").val("")
		}
	});


/*
	$(".cnv-1").click(function(ev) {
		$(".persona").append('<p>')

	});
*/
});