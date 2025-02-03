const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');

// Criar objetos de áudio
const audioStart = new Audio('./soung/audio_theme.mp3');
const audioGameover = new Audio('./soung/audio_gameover.mp3');

// Função de pulo
const jump = () => {
    mario.classList.add('jump');
    
    setTimeout(() => {
        mario.classList.remove('jump');
    }, 500);
}

// Loop do jogo
const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        // Parar animações
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;
        
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;
        
        mario.src = './images/game-over.png';
        mario.style.width = '75px';
        mario.style.marginLeft = '50px';

        // Tocar som de game over e parar a música
        audioStart.pause();
        audioStart.currentTime = 0;
        audioGameover.play();
        
        clearInterval(loop);
    }
}, 10);

// Iniciar a música quando a página carregar
window.addEventListener('DOMContentLoaded', function () {
    audioStart.loop = true;
    audioStart.play();
    audioStart.volume = 0.5;
});

// Detectar toques e teclas para o pulo
document.addEventListener('touchstart', jump);
document.addEventListener('keydown', jump);