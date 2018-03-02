function limpiarError(paramError) {
	document.getElementById(paramError).innerHTML ="";
};

function mostrarError(paramError){
	if (paramError == "Nombre")
 		document.getElementById(paramError).innerHTML ="Tiene que escribir el nombre del paciente mayor de 3 caracteres";
 };


 function validarNombre(){
console.log("prueba");
 };