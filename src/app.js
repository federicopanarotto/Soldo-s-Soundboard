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


function playSoundClick(e) {
    let audio;
    let key;

    switch (e) {
        case "A":
            console.log(e);
            audio = document.querySelector(`audio[data-key="65"]`);
            key = document.querySelector(`div[data-key="65"]`);
            break;
        case "S":
            console.log(e);
            audio = document.querySelector(`audio[data-key="83"]`);
            key = document.querySelector(`div[data-key="83"]`);
            break;
        case "D":
            console.log(e);
            audio = document.querySelector(`audio[data-key="68"]`);
            key = document.querySelector(`div[data-key="68"]`);
            break;
        case "F":
            console.log(e);
            audio = document.querySelector(`audio[data-key="70"]`);
            key = document.querySelector(`div[data-key="70"]`);
            break;
        case "G":
            console.log(e);
            audio = document.querySelector(`audio[data-key="71"]`);
            key = document.querySelector(`div[data-key="71"]`);
            break;
        case "H":
            console.log(e);
            audio = document.querySelector(`audio[data-key="72"]`);
            key = document.querySelector(`div[data-key="72"]`);
            break;
        case "J":
            console.log(e);
            audio = document.querySelector(`audio[data-key="74"]`);
            key = document.querySelector(`div[data-key="74"]`);
            break;
        case "K":
            console.log(e);
            audio = document.querySelector(`audio[data-key="75"]`);
            key = document.querySelector(`div[data-key="75"]`);
            break;
        case "L":
            console.log(e);
            audio = document.querySelector(`audio[data-key="76"]`);
            key = document.querySelector(`div[data-key="76"]`);
            break;
        case "V":
            console.log(e);
            audio = document.querySelector(`audio[data-key="86"]`);
            key = document.querySelector(`div[data-key="86"]`);
            break;
        case "B":
            console.log(e);
            audio = document.querySelector(`audio[data-key="66"]`);
            key = document.querySelector(`div[data-key="66"]`);
            break;
        case "N":
            console.log(e);
            audio = document.querySelector(`audio[data-key="78"]`);
            key = document.querySelector(`div[data-key="78"]`);
            break;
    }

    if (!audio) return;

    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

const buttons = document.querySelectorAll(".key");
for (let i of buttons) {
    i.onclick = () => playSoundClick(i.querySelector("kbd").textContent);
}