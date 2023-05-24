import { questions } from "./questions.js";
import { countries } from "./countries.js"


const choices = Array.from(document.getElementsByClassName("answer"));
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

function getNewQuestion() {
    if (availableQuestions === 0 || questionCounter >= MAX_QUESTIONS) {
        //go to the end page
        return window.location.assign("/end.html");
    }

    questionCounter++;
    questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`
    
    function getRandomAnswer() {
        var randomAnswer = Math.floor(Math.random() * countries.length);
        return countries[randomAnswer].name;
    }

    function displayAnswers(maxAnswers) {
        var numAnswersDisplayed = 0;

        // Loop until max number of answers are displayed
        while (numAnswersDisplayed < maxAnswers) {
            // Add the answer to the div elements
            var answersElements = document.getElementsByClassName("answer");

            for (let i = 0; i < answersElements.length; i++) {
                answersElements[i].innerHTML = getRandomAnswer();
            }
            // Increment the number of Answers displayed
            numAnswersDisplayed++;
        }
    }

    // Call the function to display the Answers 
    displayAnswers(4);

    function getRandomQuestion() {
        var possibleQuestion = document.getElementsByClassName("answer");
        var randomQuestion = Math.floor(Math.random() * possibleQuestion.length);
        return possibleQuestion[randomQuestion];
    }

    function displayQuestion() {
        var flag = document.getElementById("question");
        var question = document.getElementById("question-hidden");
        question.innerHTML = getRandomQuestion().innerText;
        var index = countries.findIndex(x => x.name === question.innerText);
        flag.src = countries[index].flag;
    }
    displayQuestion();
    acceptingAnswers = true;
};

choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;
        var question = document.getElementById("question-hidden");
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.innerHTML;

        const classToApply = selectedAnswer === question.innerText ? "correct" : "incorrect";

        selectedChoice.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);

    });
});

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

function gamePage() {
    var x = document.getElementById("choose-level");
    var y = document.getElementById("game-page");
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
            gamePage();
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

startGame();