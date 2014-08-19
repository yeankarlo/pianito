//JavaScript

// Esperar a que el documento esté listo
$(document).ready(function(e){
	// Calcula la altura del dispositivo y lo asigna al DIV "principal"
	$('#principal').height($('#page').height());
	
	// Esperar a que el dispositivo esté listo.
	document.addEventListener("deviceready",function(){
		// Creamos la variable "audio" a partir del constructos del objeto del plugin que especificamos en el config.xml
		audio = window.plugin.LowLatencyAudio;
	},false); //deviceready
});//ready