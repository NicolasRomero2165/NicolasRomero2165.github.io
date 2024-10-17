var sonido = new Audio('doom_door.mp3');
var puerta = document.getElementById('doom2_gif');
puerta.addEventListener('animationstart', function(){
    sonido.play();
});

var rechazo = document.getElementById('rechazo');

if (edad < 18) {
    document.getElementById('datos').style.display="none";
    puerta.style.top="-65%";
    puerta.style.animationName="puerta2";
} else if (edad < 30) {
    rechazo.textContent="Marine Joven";
} else if (edad < 50) {
    rechazo.textContent="Marine Adulto";
} else if (edad < 70) {
    rechazo.textContent="Marine Veterano";
} else {
    rechazo.textContent="Marine Inmortal";
};

var contenido = document.getElementById('caja1_sec2');
var titulo = document.createElement('h3');
var tituloTexto = document.createTextNode('DOOM 3');

var DOOM3Textos = [
    'Este DOOM lanzado en 2004 intentó ser un reinicio de la saga, enfocándose más en la historia y haciéndolo un juego más terrorífico, cambiando totalmente la jugabilidad de sus antecesores donde lo principal era el frenetísmo y la acción.',
    'Una vez más fue una innovación gráficamente, implementando luces y sombras dinámicas de alta resolución pero esto no fue suficiente para los jugadores. Al tener una nueva jugabilidad, no estuvieron conformes con los cambios. Los niveles ya no eran enormes, sino más pasilleros y cerrados, además de quitarle un gran número de enemigos en pantalla. No es un mal juego pero para los fanáticos de DOOM está considerado como el peor de toda la saga debido a que perdió su esencia.',
    'Aunque tenía varias de sus características de siempre como el arsenal y demonios reconocibles de sus juegos anteriores, a pesar de que se cambiaron el diseño de algunos y se agregaron otros nuevos, algunos jugadores defendían este juego ya que la compañía se arriesgo con un gran cambio y aportó algo diferente a la serie. De hecho, así era la idea en un principio en hacer DOOM en 1993 pero no pudieron por la limitación tecnológica de aquella época.',
    'Algo de lo que se puede críticar y, que todo el mundo está de acuerdo, es de su banda sonora la cuál no posee. Se quitó el característico heavy metal de siempre que sonaban durante los niveles mientras matabas demonios al ritmo del rock and roll, para dejar espacio a un ambiente sin sonido haciéndolo más perturbador, intentando provocar tensión y nerviosismo al jugador de que no bajara la guardia porque en cualquier momento podría aparecer un enemigo para intentar matarlo.',
    'Tuvo una expansión llamada DOOM 3: Resurrection of Evil que fue lanzada en 2005 desarrollado por Nerve Software que incluía 12 niveles y 6 enemigos nuevos. También agregó 2 armas más: el arma de gravedad que permitía agarrar objetos y proyectiles enemigos, como bolas de fuego, para devolvérselos y el Artefacto que era un corazón demoníaco, afectaba al marine con adrenalina haciendo que el juego vaya en cámara lenta por unos segundos, permitiendo al jugador una respuesta más rápida al manejo de la situación.',
    'Para terminar con la generación, en 2012 se lanzó una remasterización del DOOM 3 llamada DOOM 3 llamada DOOM 3: BFG Edition. Esta mejoraba los gráficos, los efectos de sonido y agregando pequeñas pero nuevas características como permitir usar la linterna sin la necesidad de andar desarmado, esto se criticó porque le quitaba el suspenso al dejar indefenso al jugador la cuál era la idea del juego en un principio con DOOM 3. También se agregó una nueva campaña llamada "The Lost Mission" y los juegos originales de DOOM I & II.',
    'El pack trae ambos y permite al jugador elegir el DOOM 3 original o el remasterizado.',
    ];

function doom3info(){
    document.getElementById('infoDOOM3').style.display='none';
    titulo.appendChild(tituloTexto);
    contenido.appendChild(titulo);
    for (let i = 0; i < DOOM3Textos.length; i++) {
        var parrafos = document.createElement('p');
        var texto = document.createTextNode(DOOM3Textos[i]);
        parrafos.appendChild(texto);
        contenido.appendChild(parrafos);
}};
