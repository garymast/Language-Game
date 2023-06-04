
let squares = document.getElementsByClassName("square");
let mole = document.getElementsByClassName("mole");
let timeLeft = document.getElementById("time-left");
let score = document.getElementById("score");
let engPhrase = document.getElementById("eng-phrase");
const synth = window.speechSynthesis;
const voices = [];

let result = 0;
let hitPosition;
let lastHit;
let arrayCopy = []
let currentTime = timeLeft.textContent;
let timerId = null;
let countDownTimerId = null;



let germanNumbers = [
    ["zero",["Null"]],
    ["one",["Eins"]],
    ["two",["Zwei"]],
    ["three",["Drei"]],
    ["four",["Vier"]],
    ["five",["Fünf"]],
    ["six",["Sechs"]],
    ["seven",["Sieben"]],
    ["eight",["Acht"]],
    ["nine",["Neun"]],
    ["ten",["Zehn"]]    
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


});

function randomSquare() {
    for (let square of squares) {
        square.classList.remove('mole');
        square.firstChild.textContent = null;
    }

    while (true) {
    let randomSquare = squares[Math.floor(Math.random() * 4)];
    

    if (lastHit != randomSquare.id) {
        console.log("Different - Exit");
        randomSquare.classList.add('mole');
        hitPosition = randomSquare.id;
        // Ensure that the random square isn't the previous mole square
        lastHit = randomSquare.id;
        assignPhrase(randomSquare)
        break;
} else {
    console.log("Same - Loop Again")
}
}
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
    arrayCopy = germanNumbers;
    clearInterval(timerId);
    timerId = setInterval(randomSquare, 1500)
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
function assignPhrase(square) {

    if (arrayCopy.length == 0) {
        console.log("It's 0");
        // arrayCopy = [];
        // arrayCopy = germanNumbers;
        arrayCopy = [
            ["zero",["Null"]],
            ["one",["Eins"]],
            ["two",["Zwei"]],
            ["three",["Drei"]],
            ["four",["Vier"]],
            ["five",["Fünf"]],
            ["six",["Sechs"]],
            ["seven",["Sieben"]],
            ["eight",["Acht"]],
            ["nine",["Neun"]],
            ["ten",["Zehn"]]    
        ]
        console.log(arrayCopy);
    }

    // genre.sort();
    let r = Math.floor(Math.random()*arrayCopy.length)

    engPhrase.textContent = arrayCopy[r][0];
    square.firstChild.textContent = arrayCopy[r][1];
    
    speakWord(arrayCopy[r][1]);
    
    console.log(arrayCopy.length)
    
    arrayCopy.splice(r, 1);
     console.log(r);
    // if (arrayCopy.length == 0)
    
    // genre = arrayCopy;
}

function speakWord(word) {

        const utterThis = new SpeechSynthesisUtterance(word);
        utterThis.lang = "de-DE";
        // Set to German
        synth.speak(utterThis);
        console.log("spoken")
}

var splashScreen = document.querySelector('.splash');
splashScreen.addEventListener('click',()=>{
  splashScreen.style.opacity = 0;
  setTimeout(()=>{
    splashScreen.classList.add('hidden')
  },610)
})
