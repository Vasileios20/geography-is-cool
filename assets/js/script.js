import { questions } from "./questions.js";
import { countries, countriesISO } from "./countries.js"

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
    availableQuestions = [...countriesISO];
    getNewQuestion();
};

// Function to get a new question
// First gets 4 random answers and display them. 
// From these creates an array to get one random question (flag).
// There is question counter to stop the function
//  when MAX_QUESTIONS has been reached.

function getNewQuestion() {
    if (availableQuestions === 0 || questionCounter >= MAX_QUESTIONS) {
        //go to the end page
        return window.location.assign("/end.html");
    }

    questionCounter++;
    questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`

    function getRandomAnswer() {
        var randomAnswer = Math.floor(Math.random() * countriesISO.length);
        return countriesISO[randomAnswer].name;
    }

    function displayAnswers(maxAnswers) {
        var numAnswersDisplayed = 0;

        while (numAnswersDisplayed < maxAnswers) {
            var answersElements = document.getElementsByClassName("answer");

            for (let i = 0; i < answersElements.length; i++) {
                answersElements[i].innerHTML = getRandomAnswer();
            }
            numAnswersDisplayed++;
        }
    }

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
    // Remove one question from the array 
    availableQuestions.splice(countriesISO, 1);
  
    acceptingAnswers = true;
};

// Function to check the answer
// Highligths, by classToApply, the correct or wrong 
// answer with time delay of 1 sec before it loads the 
// next question
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

// Functions to toggle between pages/sections
function chooseLevel() {
    var x = document.getElementById("start-page");
    var y = document.getElementById("choose-level");
    x.style.display === "none" ? x.style.display = "block" : x.style.display = "none", y.style.display = "block";
};

function gamePage() {
    var x = document.getElementById("choose-level");
    var y = document.getElementById("game-page");
    x.style.display === "none" ? x.style.display = "block" : x.style.display = "none", y.style.display = "block";
};

// Level selection buttons to start the game
// Love Maths walkthroug project code
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