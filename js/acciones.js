//JavaScript

// Esperar a que el documento esté listo
$(document).ready(function(e){
	// Calcula la altura del dispositivo y lo asigna al DIV "principal"
	$('#principal').height($('#page').height());
	
	// Esperar a que el dispositivo esté listo.
	document.addEventListener("deviceready",function(){
		// Creamos la variable "audio" a partir del constructos del objeto del plugin que especificamos en el config.xml
		audio = window.plugin.LowLatencyAudio;
		audio.preloadFX('C','audio/DO.mp3',function(){},function(e){ alert('Error: ' + e); });
		audio.preloadFX('D','audio/RE.mp3',function(){},function(e){ alert('Error: ' + e); });
		audio.preloadFX('E','audio/MI.mp3',function(){},function(e){ alert('Error: ' + e); });
		audio.preloadFX('F','audio/FA.mp3',function(){},function(e){ alert('Error: ' + e); });
		audio.preloadFX('G','audio/SOL.mp3',function(){},function(e){ alert('Error: ' + e); });
		audio.preloadFX('A','audio/LA.mp3',function(){},function(e){ alert('Error: ' + e); });
		audio.preloadFX('B','audio/SI.mp3',function(){},function(e){ alert('Error: ' + e); });
		
		$('.nota').bind('touchstart',function(){
			$(this).addClass('tocada');
			audio.play($(this).attr('id'));
			
		}).bind('touchend',function(){
			$(this).removeClass('tocada');
		});
	},false); //deviceready
});//ready