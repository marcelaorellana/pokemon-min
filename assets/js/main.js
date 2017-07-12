$.ajax({
	url: 'http://pokeapi.co/api/v2/pokemon',
	type: 'GET',
	dataType: 'json',
	data: {'limit': '10'},
})
.done(function(respuesta) {
	console.log(respuesta);
	escribePokemon(respuesta);
	
})
.fail(function() {
	console.log("error");
})
.always(function() {
	console.log("complete");
}); 

function escribePokemon(obj){
	obj.results.forEach(function(el){
		var nombre = el.name;
		var urlPK = el.url;

		$.ajax({
			url : urlPK,
			type : 'GET',
			datatype : 'json'
					
			})
			.done(function(respuest){
				console.log("successe");
				console.log(respuest);
				habilidades(nombre, respuest);
			})
			.fail(function(){
				console.log("error");
			})

	});
}
function habilidades(nombre, obj){
	console.log(obj.abilities);
	var contenedor = $("<div>").addClass('contenedor');
	var nombrePK = $("<h3>");
	var habilidades = $("<div>").addClass('contHabilidad');
	var textHabilidad = $("<p>");
	var listaHabilidad = $("<ul>");
	var medidas = $("<div>").addClass('medidas');
	var textMedidas = $("<p>");
	var tipoHabilidad = "";

	var tipo = obj.abilities;

	for(i=0; i<tipo.length; i++){
		//console.log(abilidades[i].ability.name);
		tipoHabilidad += "<li><p>" + tipo[i].ability.name + "</p></li>";
	}

	habilidades.append(textHabilidad);
	habilidades.append(listaHabilidad);

	contenedor.append(nombrePK);
	contenedor.append(habilidades);

	$("#pokemones").append(contenedor);


}
//Imprimir pokemon + habilidad 10ptos
//Imprimir pokemon + todas las habilidades 15puntos
//Imprimir pokemon habilidades y cualquier otra cosas del pokemon +20ptos
//No hacerlo con document.write 30pts
//Hacerlo con jquery 35ptos
//Agregar CSS 45ptos