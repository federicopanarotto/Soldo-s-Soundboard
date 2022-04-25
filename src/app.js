const keyPressed = document.querySelectorAll(".key");

function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    e.target.classList.remove('playing');
}

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);


function playSoundClick(letter) {
    let keyCode;

    switch (letter) {
        case "A":
            keyCode = 65;
            break;
        case "S":
            keyCode = 83;
            break;
        case "D":
            keyCode = 68;
            break;
        case "F":
            keyCode = 70;
            break;
        case "G":
            keyCode = 71;
            break;
        case "H":
            keyCode = 72;
            break;
        case "J":
            keyCode = 74;
            break;
        case "K":
            keyCode = 75;
            break;
        case "L":
            keyCode = 76;
            break;
        case "V":
            keyCode = 86;
            break;
        case "B":
            keyCode = 66;
            break;
        case "N":
            keyCode = 78;
            break;
    }

    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`div[data-key="${keyCode}"]`);
    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

const buttons = document.querySelectorAll(".key");
for (let i of buttons) {
    i.onclick = () => playSoundClick(i.querySelector("kbd").textContent);
}