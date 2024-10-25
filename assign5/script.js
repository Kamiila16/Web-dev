const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('click', () => playSound(key));
});
function playSound(key) {
    const note = key.getAttribute('data-note');
    const audio = new Audio(`sounds/${note}.mp3`);
    audio.play();

    
    key.classList.add('active');
    setTimeout(() => key.classList.remove('active'), 100);
}


