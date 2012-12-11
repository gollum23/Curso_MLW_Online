/*
Navigator --> Geolocalización, Acelerometros (Browser)
windows --> Resolución de pantalla (Pestañas)
document --> etiqueta html y todo su contenido

DOM --> Document Object Model
*/

$(document).on("ready", inicio);
function inicio() {
	// Asigno todos los eventos click cuando el DOM esta listo
	$("#personalizar").on("click",transicion);
	$("#color div").on("click", cambiarColor);
	$("#llantas figure").on("click", cambiarLlantas);
	$("#techo figure").on("click", cambiarTecho);
}
function transicion () {
	//Quito el evento click 
	$("#personalizar").off("click",transicion);
	//Muevo el contenedor a la izquierda
	$('#slide').css("left","-47%");
	//Cambio el texto del boton para usarlo para regresar
	$("#personalizar").html("Historia");
	//Asigno el evento al boton para regresar a historia
	$("#personalizar").on("click",goHome);
}
function cambiarColor(datos){
	//Asigno a la variable el id del elemento al que se le hace click
	var col = datos.currentTarget.id;
	// Se cambia el atributo src a la imagen con id carro
	$("#carro").attr("src","c"+col+".jpg");
	// Se cambia el texto del color del carro que esta en el figcaption
	$("#descripcioncolor").html("<strong>Color: </strong>"+col)
}
function cambiarLlantas (datos) {
	//Asigno a la variable el id del elemento al que se le hace click
	var tires = datos.currentTarget.id;
	// Se cambia el atributo src a las dos imagenes con id llantadel y llantatras
	$("#llantadel").attr("src",tires+".png");
	$("#llantatras").attr("src",tires+".png");
	// Se verifica cual llanta esta seleccionada para cambiar el texto del figcaption
	if(tires==="llanta1"){
		$("#descripcionllantas").html("<strong>Llantas: </strong>Baratas")
	} else {
		$("#descripcionllantas").html("<strong>Llantas: </strong>Caras")
	}
}
function cambiarTecho (datos) {
	//Asigno a la variable el id del elemento al que se le hace click
	var techo = datos.currentTarget.id;
	// Se cambia el atributo src a la imagen que contiene el techo
	$("#techo").attr("src", techo+".png");
	// Se verifica cual techo esta seleccionado para cambiar el texto del figcaption
	if(techo==="techo1"){
		$("#descripciontecho").html("<strong>Techo: </strong>Blanco")
	} else {
		$("#descripciontecho").html("<strong>Techo: </strong>Negro")
	}
}
function goHome (datos) {
	// Se elimina el evento click
	$("#personalizar").off("click",goHome);
	// Se desplaza el slide hacia la derecha
	$('#slide').css("left","-3%");
	// Se cambia el texto del boton
	$("#personalizar").html("Personalizar");
	// Se asigna el evento click al id personalizar
	$("#personalizar").on("click",transicion);
}