/* Animación de la puerta */
const sonido = new Audio('doom_door.mp3');
const puerta = document.getElementById('doom2_gif');
puerta.addEventListener('click', function(){
    const puertaSubir = [{transform: "translateY(0%)"}, {transform: "translateY(-100%)"}];
    const puertaTiempo = {duration: 2000, iterations: 1}
    this.animate(puertaSubir, puertaTiempo);
    setTimeout(() => {
        puerta.style.top = "-100%";
    }, 2000);
    sonido.play();
})

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


/* Botones de descripción detallada de la tienda */
const info = document.querySelector("#descripcion");
const botonInfo1 = document.querySelector("#boton_info1");
const botonInfo2 = document.querySelector("#boton_info2");
const botonInfo3 = document.querySelector("#boton_info3");
const botonInfo4 = document.querySelector("#boton_info4");

function cerrarVentana() {
    document.getElementById('descripcion').style.display = "none";
}

botonInfo1.addEventListener("click", function () { 
    info.innerHTML = "<h3>SILLA GAMER</h3> <section class='infoProducto'> <div>PRECIO</div><div>$ 248000</div> <div>MODELO</div><div>Gamer Super Confort</div> <div>MARCA</div><div>Patagonia Home</div> <div>MEDIDAS</div><div>84cm X 53cm</div> <div>PESO MAX</div><div>120kg</div> <div>ERGONÓMICA</div><div>Sí</div> <div>ESTRUCTURA</div><div>Metal, PVC, cuero ecológico</div> <div>RELLENO</div><div>Goma espuma</div> </section> <button class='form-control boton_cerrar' onclick='cerrarVentana()'>X</button>"
    document.getElementById('descripcion').style.display = "block";
})

botonInfo2.addEventListener("click", function () { 
    info.innerHTML = "<h3>AURICULARES</h3> <section class='infoProducto'> <div>PRECIO</div><div>$ 65919</div> <div>MODELO</div><div>G432</div> <div>MARCA</div><div>Logitech G</div> <div>CABLE</div><div>2m</div> <div>COLOR</div><div>Negro</div> <div>MICRÓFONO</div><div>Sí</div> <div>BLUETOOTH</div><div>5.2</div> <div>CANALES</div><div>7.1</div> </section> <button class='form-control boton_cerrar' onclick='cerrarVentana()'>X</button>"
    document.getElementById('descripcion').style.display = "block";
})

botonInfo3.addEventListener("click", function () { 
    info.innerHTML = "<h3>GABINETE</h3> <section class='infoProducto'> <div>PRECIO</div><div>$ 132700</div> <div>MODELO</div><div>g50</div> <div>MARCA</div><div>Sentey</div> <div>MEDIDAS</div><div>435mm x 180mm x 412cm</div> <div>ESTRUCTURA</div><div>Mid Tower</div> <div>PUERTOS</div><div>2 USB Frontlane y audio</div> <div>MATERIAL</div><div>Chapa</div> <div>P. MADRE</div><div>ATX, M-ATX</div> </section> <button class='form-control boton_cerrar' onclick='cerrarVentana()'>X</button>"
    document.getElementById('descripcion').style.display = "block";
})

botonInfo4.addEventListener("click", function () { 
    info.innerHTML = "<h3>MONITOR</h3> <section class='infoProducto'> <div>PRECIO</div><div>$ 184000</div> <div>MODELO</div><div>LED</div> <div>MARCA</div><div>LG</div> <div>PULGADAS</div><div>22</div> <div>VOLTAJE</div><div>220v</div> <div>RESOLUCIÓN</div><div>1920 px x 1080 px</div> <div>REFRESCO</div><div>75 Hz</div> <div>ASPECTO</div><div>16:9</div> </section> <button class='form-control boton_cerrar' onclick='cerrarVentana()'>X</button>"
    document.getElementById('descripcion').style.display = "block";
})

fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(response => response.json())
      .then(json => console.log(json))


