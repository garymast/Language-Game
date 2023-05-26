let squares = document.getElementsByClassName("square");
let mole = document.getElementsByClassName("mole");
let timeLeft = document.getElementById("time-left");
let score = document.getElementById("score");

let result = 0;
let hitPosition;

function randomSquare() {
    for (let square of squares) {
        square.classList.remove('mole');
    }

    let randomSquare = squares[Math.floor(Math.random() * 3)];
    randomSquare.classList.add('mole');

    hitPosition = randomSquare.id;
    // Ensure that the random square isn't the previous mole square
}

for (let square of squares) {
    square.addEventListener('mousedown', () => {
        if (square.id == hitPosition) {
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    })
}

function moveMole() {
    let timerId = null;
    timerId = setInterval(randomSquare, 750)
}

moveMole();
// Attach this to a start game button