let squares = document.getElementsByClassName("square");
let mole = document.getElementsByClassName("mole");
let timeLeft = document.getElementById("time-left");
let score = document.getElementById("score");

let result = 0;
let hitPosition;
let currentTime = 10;
let timerId = null;

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
    timerId = setInterval(randomSquare, 750)
}

moveMole();
// Attach this to a start game button

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if (currentTime == 0) {
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        alert('game over! Final score: ' + result)
    }
}

let countDownTimerId = setInterval(countDown, 1000);

