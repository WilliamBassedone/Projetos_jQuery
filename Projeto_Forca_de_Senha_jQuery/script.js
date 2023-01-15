$(document).ready(function(){
	$("#senha").bind("keyup", function(){
		var txt = $(this).val();
		var forca = 0;
		// REQUISITOS -> letras, numeros, caracteres especiais, min. de caracteres

		// Quantidade de caracteres
		if (txt.length > 6) {
			forca += 25;
		}
		// Letras de A a Z indepedente que seja maisculo ou minusculo
		var reg = new RegExp(/[a-z]/i);
		if (reg.test(txt)) {
			forca += 25;
		}
		// Verifica se tem números
		var reg = new RegExp(/[0-9]/i);
		if (reg.test(txt)) {
			forca += 25;
		}
		// Verifica se tem caracteres especiais
		var reg = new RegExp(/[^a-z0-9]/i);
		if (reg.test(txt)) {
			forca += 25;
		}
		// Verifica se a força é maior que 75
		if (forca >= 75) {
			var aceita = "ACEITA";
		} else {
			var aceita = "NÃO ACEITA";
		}
		// Aplica valor a #forca
		$("#forca").html("Força: " + forca + " ( " + txt + " ) - " + aceita);
	});
});