/* var sonido = new Audio('doom_door.mp3');
var puerta = document.getElementById('doom2_gif');
puerta.addEventListener('animationstart', function(){
    sonido.play();
}); */

let formNombre = document.querySelector("#formNombre");
let formCorreo = document.querySelector("#formCorreo");
let formComentario = document.querySelector("#formComentario");

do { console.log("Por favor, complete todos los campos del formulario antes de enviar el mensaje.") } 
while (nombre.length > 0 && correo.length > 0 && comentario.length > 0);

const PRODUCTO = document.querySelectorAll(".producto");
let productosCant = PRODUCTO.length;
console.log("Hay "+productosCant+" productos disponibles, de los cuáles son:");
for (let i = 0; i < productosCant; i++) {
        console.log(document.querySelector("#producto"+i).textContent);
    }