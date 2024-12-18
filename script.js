/* var sonido = new Audio('doom_door.mp3');
var puerta = document.getElementById('doom2_gif');
puerta.addEventListener('animationstart', function(){
    sonido.play();
}); */

/* Función del formulario */
const formNombre = document.querySelector("#formNombre");
const formCorreo = document.querySelector("#formCorreo");
const formComentario = document.querySelector("#formComentario");
const formBoton = document.querySelector("#formBoton");

formBoton.addEventListener("click", function() {
    let nombre = formNombre.value;
    let correo = formCorreo.value;
    let comentario = formComentario.value;
    if (nombre.length === 0 || correo.length === 0 || comentario.length === 0) {
        alert("Por favor, complete todos los campos del formulario antes de enviar el mensaje.");
        console.log("Por favor, complete todos los campos del formulario antes de enviar el mensaje."); }
    else {
        console.log("Correo enviado exitosamente.");
    }})

/* Función de la lista de la tienda */
const productos = document.querySelectorAll(".producto > h5");
const productosCant = productos.length;
console.log(`Hay ${productosCant} productos disponibles, de los cuales son:`);
for (let i = 0; i < productosCant; i++) {
        console.log((i+1)+". "+productos[i].textContent);
    }