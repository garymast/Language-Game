let squares = document.getElementsByClassName("square");
let mole = document.getElementsByClassName("mole");
let timeLeft = document.getElementById("time-left");
let score = document.getElementById("score");

let result = 0;

function randomSquare() {
    for (let square of squares) {
        square.classList.remove('mole');
    }

    let randomSquare = squares[Math.floor(Math.random() * 3)];
    randomSquare.classList.add('mole');

    // Ensure that the random square isn't the previous mole square
}

randomSquare();