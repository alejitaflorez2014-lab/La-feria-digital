const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event){

event.preventDefault();

let edad = document.getElementById("edad").value;
let contacto = document.getElementById("contacto").value;
let mensaje = document.getElementById("mensaje");

if(edad <= 12){
mensaje.textContent="Error: la edad debe ser mayor a 12";
mensaje.style.color="red";
return;
}

if(contacto.length != 10){
mensaje.textContent="Error: el contacto debe tener 10 dígitos";
mensaje.style.color="red";
return;
}

mensaje.textContent="Inscripción realizada correctamente";
mensaje.style.color="green";

});