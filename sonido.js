var sonido = new Audio('doom_door.mp3');
var puerta = document.getElementById('doom2_gif');
puerta.addEventListener('animationstart', function(){
    sonido.play();
});