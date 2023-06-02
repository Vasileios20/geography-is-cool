const choices = Array.from(document.getElementsByClassName("answer"));
const questionCounterText = document.getElementById("question-counter");
const scoreText = document.getElementById("score");
const startButton = document.getElementById('btn-start');
const goBackButton = document.getElementById('btn-home');
const scoresButton = document.getElementById('btn-scores');
const INCREMENT_SCORE = 1;

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

// Highscores Page Button
scoresButton.addEventListener("click", () => {
    let x = document.getElementById("start-page");
    let y = document.getElementById("highscores-page");
    x.style.display === "none" ? x.style.display = "block" : x.style.display = "none", y.style.display = "block";
})
// Go Back Button at choose level page
goBackButton.addEventListener("click", () => {
    let x = document.getElementById("choose-level");
    let y = document.getElementById("start-page");
    x.style.display === "none" ? x.style.display = "block" : x.style.display = "none", y.style.display = "block";
})

// Code borrowed and edited from Love Maths walkthrough project
// Level selection buttons to start the game
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

function endPage() {
    let x = document.getElementById("game-page");
    let y = document.getElementById("end-page");
    x.style.display === "none" ? x.style.display = "block" : x.style.display = "none", y.style.display = "block";
}

// This function starts the game
function startGame() {
    questionCounter = 0;
    score = 0;
    availableCountries = [...countriesISO];
    getNewQuestion();
}

function getRandomAnswer() {
    let randomAnswer = Math.floor(Math.random() * countriesISO.length);
    return countriesISO[randomAnswer].name;
}
// This function gets 4 random answers and display them. 
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
// This function get the array of answers and generates one random question.
function getRandomQuestion() {
    let possibleQuestion = document.getElementsByClassName("answer");
    let randomQuestion = Math.floor(Math.random() * possibleQuestion.length);
    return possibleQuestion[randomQuestion];
}
// This function gets the question's name and finds it's index in the countriesISO array
//  and displays the flag
function displayQuestion() {
    let flag = document.getElementById("question");
    let question = document.getElementById("question-hidden");
    question.innerHTML = getRandomQuestion().innerText;
    let index = countriesISO.findIndex(x => x.name === question.innerText);
    flag.src = countriesISO[index].flag;
    // Remove one question from the array 
    countriesISO.splice(index, 1);
}

// Code borrowed and edited from https://www.youtube.com/watch?v=Opje9VBrNfg&t=1791s 
// Function to get a new question
// There is question counter to stop the function
//  when MAX_QUESTIONS has been reached.
function getNewQuestion() {
    if (availableCountries === 0 || questionCounter >= MAX_QUESTIONS) {
        localStorage.setItem("mostRecentScore", `${score}/${MAX_QUESTIONS}`);
        //go to the end page
        return window.location.assign("end.html");
    }

    questionCounter++;
    questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;

    displayAnswers(4);
    displayQuestion();

    acceptingAnswers = true;
}

// Code borrowed and edited from https://www.youtube.com/watch?v=Opje9VBrNfg&t=1791s 
// Function to check the answer
// Highligths, by classToApply, the correct or wrong 
// answer and displays a modal with the result.
// There is a time delay function before it loads the 
// next question
choices.forEach(choice => {
    choice.addEventListener("click", e => {
        if (!acceptingAnswers) return;
        let question = document.getElementById("question-hidden");
        let modalContent = document.getElementById("modal-content");
        let modal = document.getElementById("myModal");
        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.innerHTML;

        const classToApply = selectedAnswer === question.innerText ? "correct" : "incorrect";
        
        function correctAnswer() {
            modal.style.display = "block";
            modalContent.innerHTML = ("Congratulations! Your answer is <b>correct!</b>");
        }

        function incorrectAnswer() {
            modal.style.display = "block";
            modalContent.innerHTML = ("Sorry the correct asnwer was <b>"+ question.innerText + "</b>.");
        }
        if (classToApply === "correct") {
            incrementScore(INCREMENT_SCORE);
            correctAnswer();
        } else {
            incorrectAnswer();
        }

        selectedChoice.classList.add(classToApply);

        setTimeout(() => {
            selectedChoice.classList.remove(classToApply);
            modal.style.display = "none";
            getNewQuestion();
        }, 2500);

    });
});

// This function increments the score
function incrementScore(num) {
    score += num;
    scoreText.innerText = score;
}
startGame();