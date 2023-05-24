import { questions } from "./questions.js";
import { countries } from "./countries.js"


const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText = document.getElementById("question-counter");
const scoreText = document.getElementById("score");
const startButton = document.getElementById('btn-start');


// Start(Play) game button
startButton.addEventListener('click', () => {
    chooseLevel();
    // create_user();
});

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

// CONSTANTS
const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 10;

function startGame() {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...countries];
    console.log(availableQuestions);
    getNewQuestion();
};

function chooseLevel() {
    var x = document.getElementById("start-page");
    var y = document.getElementById("choose-level");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
        y.style.display = "block";
    }
};
// Love maths code
let buttons = document.getElementsByClassName("btn-level");

for (let button of buttons) {
  button.addEventListener("click", function () {
    if (this.getAttribute("data-level") === "10-flags") {
      ;
    } else if (this.getAttribute("data-level") === "25-flags") {
      alert("You clicked 25");
    }
    else if (this.getAttribute("data-level") === "50-flags") {
      alert("You clicked 50");
    }
    else {
      let gamelevel = this.getAttribute("data-level");
      alert(`You clicked ${gamelevel}`);
    }
  })
};

function tenQuestions() {
    var x = document.getElementById("choose-level");
    var y = document.getElementById("game-page");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
        y.style.display = "block";
    }
};


startGame();