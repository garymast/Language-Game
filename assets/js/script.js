
let squares = document.getElementsByClassName("square");
let mole = document.getElementsByClassName("mole");
let timeLeft = document.getElementById("time-left");
let score = document.getElementById("score");
let engPhrase = document.getElementById("eng-phrase");
let volBtn = document.getElementById('vol-btn');
volBtn.classList.add('on');
const synth = window.speechSynthesis;
const voices = [];
let startTime = 30;

let result = 0;
let hitPosition;
let lastHit;
let arrayCopy = [];
let arrayCopyOthers = [];
let currentTime = timeLeft.textContent;
let timerId = null;
let countDownTimerId = null;

// Check alternate squares aren't same as eachother
// Check squares not repeated one after another in stage 2
// Add option to turn off sound

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
            if (this.getAttribute("data-type") === "submit" && this.classList.contains('S2')) {
                startStageTwo();
                
            } else if (this.getAttribute("data-type") === "submit"){
                startStageOne();
            }
        });


});

function startStageOne() {
    // clearScore();
    moveMole();
    startCount();
}

function randomSquare() {

    removeMoleClass();

    while (true) {
    // let randomSquare = squares[Math.floor(Math.random() * 4)];
    let randomSquare = getRandomSquare();

    if (lastHit != randomSquare.id) {
        console.log("Different - Exit");
        randomSquare.classList.add('mole');
        hitPosition = randomSquare.id;
        // Ensure that the random square isn't the previous mole square
        lastHit = randomSquare.id;
        assignPhrase(randomSquare, "DE")
        break;
} else {
    console.log("Same - Loop Again")
}
}
}

for (let square of squares) {
    square.addEventListener('mousedown', () => {
        let button = document.getElementById("btn");

        // Stage 2 Correct Behavior
        if (square.id == hitPosition && button.classList.contains('S2')) {
            console.log("this works stage 2");
            result++;
            score.textContent = result;
            hitPosition = null;

            removeMoleClass();
            addGreenSquare(square);
            if (result >= germanNumbers.length) {
  
            score.parentElement.style.backgroundColor = "#59d259";
            }
            setTimeout(function(){
            addWhiteSquare(square);
            NextSet();
            console.log("executed")
            }, 300);
            
        } 

        // Stage 2 Incorrect Behavior
        else if (square.id != hitPosition && button.classList.contains('S2')) {
            console.log("this works stage 2 incorrect");

            hitPosition = null;

            removeMoleClass();
            addRedSquare(square);

            setTimeout(function(){
            addWhiteSquare(square);
            NextSet();
            console.log("executed")
            }, 300);
        }
        
        // Stage 1 Correct Behavior
        else if (square.id == hitPosition){
            result++;
            score.textContent = result;
            hitPosition = null;
            if (result >= germanNumbers.length) {
                score.parentElement.style.backgroundColor = "#59d259";
                console.log("<=length")
                allowNext();
        }
    }
    
}) ;
}

function moveMole() {
    // arrayCopy = germanNumbers;
    // Array = Array doesn't make a copy, just a reference to same object
    arrayCopy = [].concat(germanNumbers);
    clearInterval(timerId);
    timerId = setInterval(randomSquare, 1500)
}


// Attach this to a start game button
function startCount() {
timeLeft.textContent = startTime;
currentTime = startTime;
clearInterval(countDownTimerId);
countDownTimerId = setInterval(countDown, 1000);
}

function countDown() {
    currentTime--;
    timeLeft.textContent = currentTime;

    if (currentTime == 0) {
        clearInterval(countDownTimerId);
        clearInterval(timerId);

        setTimeout(function(){
            alert('Well Done! Final score: ' + result)
            }, 1000);
        
    }
}


// Choose a phrase and assign it to the relevant html fields
function assignPhrase(square, speak) {

    if (arrayCopy.length == 0) {
        console.log("It's 0");
        arrayCopy = [].concat(germanNumbers);
        console.log(arrayCopy);
    }

    // genre.sort();
    let r = Math.floor(Math.random()*arrayCopy.length)

    engPhrase.textContent = arrayCopy[r][0];
    square.firstChild.textContent = arrayCopy[r][1];
    console.log("square contents are:" + square.firstChild.textContent)
    
    if (speak == "DE") {
    speakWord(arrayCopy[r][1]);
    } else {
        // speakWord(arrayCopy[r][0]);
    }
    
    console.log(arrayCopy.length)
    
    arrayCopy.splice(r, 1);
    console.log(r);
}

function speakWord(word) {

        const utterThis = new SpeechSynthesisUtterance(word);
        if (volBtn.classList.contains('on')) {
            console.log("Volume on")
            utterThis.lang = "de-DE";
            // Set to German
            synth.speak(utterThis);
            console.log("spoken")
        } else {

        }


}

var splashScreen = document.querySelector('.splash');
splashScreen.addEventListener('click',()=>{
  splashScreen.style.opacity = 0;
  setTimeout(()=>{
    splashScreen.classList.add('hidden')
  },610)
})

function allowNext() {
    let next = document.getElementById('next-btn');
    next.style.cursor = "pointer";
    next.firstChild.style.color = "#59d259";
    addNextListener(next);
}

function addNextListener(next) {
    next.addEventListener("click", function () {
        if (this.getAttribute("data-type") === "submit") {
            console.log("nextbuttonclicked");
            nextStage();
        } ;
    });

}

// Volume Button Event


    volBtn.addEventListener("click", function () {
        if (this.getAttribute("data-type") === "submit") {
            console.log("volumebuttonclicked");
            if (volBtn.classList.contains('on')) {
                volBtn.classList.remove('on');
                volBtn.firstChild.classList.remove('fa-volume-low');
                volBtn.firstChild.classList.add('fa-volume-xmark');
            } else {
                volBtn.classList.add('on');
                volBtn.firstChild.classList.remove('fa-volume-xmark');
                volBtn.firstChild.classList.add('fa-volume-low');
            }
            
        } ;
    });


// Next Stage Functions
function nextStage() {
clearScreen();
addStageClass();
// Now user can click on start button will play Stage 2
}

function clearScreen() {
    timeLeft.textContent = "";
    engPhrase.textContent = "Ready!";
    removeMoleClass();
    clearInterval(timerId);
    clearInterval(countDownTimerId);
    hitPosition = null;
    clearScore();
}

function clearScore() {
    score.textContent = "";
    score.parentElement.style.backgroundColor = "white";
    result = 0;
}

function addStageClass () {
    let btn = document.getElementById('btn');
    btn.classList.add('S2');
}

function startStageTwo() {
    console.log("Stage 2 started")
    clearScore();
    startCount();
    NextSet();
}

function NextSet() {
    setMole();
    addMoleClass();
}

function setMole() {
    arrayCopy = [].concat(germanNumbers);

    let square = getRandomSquare();
    assignPhrase(square, "EN");
    hitPosition = square.id;
    assignOtherSquares(square);
}

function getRandomSquare() {
    let randomSquare = squares[Math.floor(Math.random() * 4)];
    return randomSquare;
}

function addMoleClass() {
    for (let square of squares) {
        square.classList.add('mole');
    }
}
    
function removeMoleClass() {
    for (let square of squares) {
        square.classList.remove('mole');
        square.firstChild.textContent = "";
    }
}

function assignOtherSquares(square) {
    let mole = square.firstChild.textContent;
    let word;

    for (i=0 ; i<=2 ; i++) {
        let r = Math.floor(Math.random()*arrayCopy.length)
        word = germanNumbers[r][1];
        if (mole == word) {
            console.log('same - look again');
            i--;
        } else {
            arrayCopyOthers[i] = word;
        }
    }

    setOtherSquares(arrayCopyOthers);
    // Make sure to empty this array after each round
    arrayCopyOthers.length = 0;
}

// Put the random words in the empty squares
function setOtherSquares(words) {
    console.log(words[1]);

    for (let i=0 ; i<=2 ; i++) {

        for(let square of squares) {
            if (square.firstChild.textContent == "") {
                square.firstChild.textContent = words[i];
                break;
            }
        }
    }
}

function addGreenSquare(square) {
    square.style.backgroundColor =  "#59d259";
    console.log("called green Correct");
}

function addWhiteSquare(square) {
    square.style.backgroundColor =  "white";
    console.log("called green Remove");
}

function addRedSquare(square) {
    square.style.backgroundColor =  "red";
    console.log("called green Remove");
}

{/* <i class="fa-solid fa-volume-xmark"></i> */}