// Se crean todas las variables
var pickColor = document.getElementById("mySelect");
var forBoxs = document.getElementById("boxConteiner");
var clearAllBox = document.getElementById("clear");
var clickBox = document.getElementById("clickEvent");
var bigBox = "";
//Se crean todas las cajitas
for (var i = 0; i < 1000; i++) {
	bigBox += "<div id='box-" + i + "' class='littleBox'></div>"; 
}
forBoxs.innerHTML = bigBox;
//Se les da un ID a las cajitas
 for(var j = 0; j < 100; j++){
 	var boxClickAll = document.getElementById("box-" + j);
 	addEvent(boxClickAll);
 }
//Se les da el evento click y se les da el valor del color que tienen que tomar
function addEvent(boxClickAll){
	boxClickAll.addEventListener("click", function(){
		boxClickAll.style.backgroundColor = pickColor.value;
	});
}
//Se crea el boton clear que sirve para limpiar y devolver los cuadritos a su color original
clearAllBox.addEventListener("click", function(){
	for(var j = 0; j < 100; j++){
 	var boxClickAll = document.getElementById("box-" + j).style.backgroundColor = "white";
 	}
});

