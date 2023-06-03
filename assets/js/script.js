
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

function populateVoiceList() {
    voices = synth.getVoices();
  
    for (const voice of voices) {
      const option = document.createElement("option");
      option.textContent = `${voice.name} (${voice.lang})`;
  
      if (voice.default) {
        option.textContent += " — DEFAULT";
      }
  
      option.setAttribute("data-lang", voice.lang);
      option.setAttribute("data-name", voice.name);
      voiceSelect.appendChild(option);
    }
  }

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
        assignPhrase(randomSquare, germanNumbers)
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
function assignPhrase(square, genre) {

    let r = Math.floor(Math.random()*genre.length)

    engPhrase.textContent = genre[r][0];
    square.firstChild.textContent = genre[r][1];
    
    speakWord(genre[r][1]);
}

function speakWord(word) {

        const utterThis = new SpeechSynthesisUtterance(word);
        utterThis.lang = "de-DE";
        // Set to German
        synth.speak(utterThis);
}