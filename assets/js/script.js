
let squares = document.getElementsByClassName("square");
let mole = document.getElementsByClassName("mole");
let timeLeft = document.getElementById("time-left");
let score = document.getElementById("score");
let engPhrase = document.getElementById("eng-phrase");

let result = 0;
let hitPosition;
let currentTime = 10;
let timerId = null;
let countDownTimerId = null;

let germanNumbers = [
    ["zero",["null"]],
    ["one",["eins"]],
    ["two",["zwei"]],
    ["three",["drei"]],
    ["four",["vier"]],
    ["five",["fünf"]],
    ["six",["sechs"]],
    ["seven",["sieben"]],
    ["eight",["acht"]],
    ["nine",["neun"]],
    ["ten",["zehn"]]    
]

document.addEventListener("DOMContentLoaded", function () {
    let button = document.getElementById("btn");

        button.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "submit") {
                console.log("buttonclicked");
                // checkAnswer();
                moveMole();
                startCount();
            } ;
        });
    
    // runGame("addition");

});

function randomSquare() {
    for (let square of squares) {
        square.classList.remove('mole');
    }

    let randomSquare = squares[Math.floor(Math.random() * 4)];
    randomSquare.classList.add('mole');

    hitPosition = randomSquare.id;
    // Ensure that the random square isn't the previous mole square

    assignPhrase(randomSquare, germanNumbers)
    
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
    clearInterval(timerId);
    timerId = setInterval(randomSquare, 1000)
}


// Attach this to a start game button
function startCount() {
clearInterval(countDownTimerId);
countDownTimerId = setInterval(countDown, 1000);
}

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if (currentTime == 0) {
        clearInterval(countDownTimerId);
        clearInterval(timerId);
        alert('game over! Final score: ' + result)
    }
}



// Choose a phrase and assign it to the relevant html fields
function assignPhrase(square, genre) {

    let r = Math.floor(Math.random()*genre.length)

    engPhrase.textContent = genre[r][0];
    square.firstChild.textContent = genre[r][1];
    
}

