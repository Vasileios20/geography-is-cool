const choices = Array.from(document.getElementsByClassName("answer"));
const questionCounterText = document.getElementById("question-counter");
const scoreText = document.getElementById("score");
const startButton = document.getElementById('btn-start');
const CORRECT_BONUS = 10;

let buttons = document.getElementsByClassName("btn-level");
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableCountries = [];
let MAX_QUESTIONS;

// Start(Play) game button
startButton.addEventListener('click', () => {
    chooseLevel();
    // create_user();
});

// Level selection buttons to start the game
// Love Maths walkthrough project code
for (let button of buttons) {
    button.addEventListener("click", function () {
        if (this.getAttribute("data-level") === "10-flags") {
            gamePage(), MAX10(), questionCounterText.innerText = `${questionCounter}/10`;
        } else if (this.getAttribute("data-level") === "25-flags") {
            gamePage(), MAX25(), questionCounterText.innerText = `${questionCounter}/25`;
        } else if (this.getAttribute("data-level") === "50-flags") {
            gamePage(), MAX50(), questionCounterText.innerText = `${questionCounter}/50`;
        } else {
            gamePage(), MAX_ALL(), questionCounterText.innerText = `${questionCounter}/249`;
        }
    });
}

// Functions to toggle between pages/sections
function chooseLevel() {
    let x = document.getElementById("start-page");
    let y = document.getElementById("choose-level");
    x.style.display === "none" ? x.style.display = "block" : x.style.display = "none", y.style.display = "block";
}

function gamePage() {
    let x = document.getElementById("choose-level");
    let y = document.getElementById("game-page");
    x.style.display === "none" ? x.style.display = "block" : x.style.display = "none", y.style.display = "block";
}

// This function starts the game
function startGame() {
    questionCounter = 0;
    score = 0;
    availableCountries = [...countriesISO];
    getNewQuestion();
}

// Function to get a new question
// First gets 4 random answers and display them. 
// From these creates an array to get one random question (flag).
// There is question counter to stop the function
//  when MAX_QUESTIONS has been reached.
function getNewQuestion() {
    if (availableCountries === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", score);
        //go to the end page
        return window.location.assign("end.html");
    }

    questionCounter++;
    questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;

    function getRandomAnswer() {
        let randomAnswer = Math.floor(Math.random() * countriesISO.length);
        return countriesISO[randomAnswer].name;
    }

    function displayAnswers(maxAnswers) {
        let numAnswersDisplayed = 0;

        while (numAnswersDisplayed < maxAnswers) {
            let answersElements = document.getElementsByClassName("answer");

            for (let i = 0; i < answersElements.length; i++) {
                answersElements[i].innerHTML = getRandomAnswer();
            }
            numAnswersDisplayed++;
        }
    }

    displayAnswers(4);

    function getRandomQuestion() {
        let possibleQuestion = document.getElementsByClassName("answer");
        let randomQuestion = Math.floor(Math.random() * possibleQuestion.length);
        return possibleQuestion[randomQuestion];
    }

    function displayQuestion() {
        let flag = document.getElementById("question");
        let question = document.getElementById("question-hidden");
        question.innerHTML = getRandomQuestion().innerText;
        let index = countriesISO.findIndex(x => x.name === question.innerText);
        flag.src = countriesISO[index].flag;
        availableCountries.splice(index, 1);
        console.log(index);
    }
    displayQuestion();
    // Remove one question from the array 
   
    console.log(availableCountries);
    console.log(countriesISO);

    acceptingAnswers = true;
}

// Function to check the answer
// Highligths, by classToApply, the correct or wrong 
// answer with time delay of 1 sec before it loads the 
// next question
choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;
        let question = document.getElementById("question-hidden");
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.innerHTML;

        const classToApply = selectedAnswer === question.innerText ? "correct" : "incorrect";

        if (classToApply === "correct") {
            incrementScore(CORRECT_BONUS);
        }

        selectedChoice.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.classList.remove(classToApply);
            getNewQuestion();
        }, 1000);

    });
});

// This function increments the score
function incrementScore(num) {
    score += num;
    scoreText.innerText = score;
}
startGame();