const choices = Array.from(document.getElementsByClassName("answer"));
const questionCounterText = document.getElementById("question-counter");
const scoreText = document.getElementById("score");
const startButton = document.getElementById('btn-start');
const goBackButton = document.getElementById(`btn-back`);
const goHomebutton = document.getElementById('btn-home');
const scoresButton = document.getElementById('btn-scores');
const INCREMENT_SCORE = 1;

let buttons = document.getElementsByClassName("btn-level");
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableCountries = [];
let MAX_QUESTIONS;
let modalContent = document.getElementById("modal-content");
let modal = document.getElementById("myModal");
let question = document.getElementById('question-hidden');
let time = document.getElementById("timer");
let secondsLeft = 10;
let downloadTimer;

function MAX_Q(number) {
    MAX_QUESTIONS = number;
}

// Function to toggle between pages/sections
function btnFunction(id1, id2) {
    let x = document.getElementById(id1);
    let y = document.getElementById(id2);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
        y.style.display = "block";
    }
}

// Start(Play) game button
startButton.addEventListener('click', () => {
    btnFunction("start-page", "choose-level");
});

// Highscores' Buttons
scoresButton.addEventListener("click", () => {
    btnFunction("start-page", "highscores-page");
});

goHomebutton.addEventListener("click", () => {
    btnFunction("highscores-page", "start-page");
});

// Go Back Button at choose level page
goBackButton.addEventListener("click", () => {
    btnFunction("choose-level", "start-page");
});

// Code borrowed and edited from Love Maths walkthrough project
// Level selection buttons to start the game
for (let button of buttons) {
    button.addEventListener("click", function () {
        if (this.getAttribute("data-level") === "10-flags") {
            btnFunction("choose-level", "game-page");
            MAX_Q(10);
            startGame();
            questionCounterStart(10);
        } else if (this.getAttribute("data-level") === "25-flags") {
            btnFunction("choose-level", "game-page");
            MAX_Q(25);
            startGame();
            questionCounterStart(25);
        } else if (this.getAttribute("data-level") === "50-flags") {
            btnFunction("choose-level", "game-page");
            MAX_Q(50);
            startGame();
            questionCounterStart(50);
        } else {
            btnFunction("choose-level", "game-page");
            MAX_Q(249);
            startGame();
            questionCounterStart(249);
        }
    });
}

// Function to set the question counter inner text to be displayed when game starts
function questionCounterStart(number) {
    questionCounterText.innerText = `${questionCounter}/${number}`;
}

// This function sets a timer to answer the question
function timerShow() {
    clearInterval(downloadTimer);
    secondsLeft = 10;

    downloadTimer = setInterval(() => {
        if (secondsLeft <= 0) {
            clearInterval(downloadTimer);
            incorrectAnswer();
            setTimeout(() => {
                getNewQuestion();

            }, 2000);
        }
        time.innerText = --secondsLeft;

    }, 1000);
}

// This function starts the game
function startGame() {
    questionCounter = 0;
    score = 0;
    availableCountries = [...countriesISO];
    getNewQuestion();
}

// Code borrowed and edited from https://www.youtube.com/watch?v=Opje9VBrNfg&t=1791s 
// Function to get a new question
// There is question counter to stop the function
//  when MAX_QUESTIONS has been reached.
function getNewQuestion() {
    if (availableCountries === 0 || questionCounter >= MAX_QUESTIONS) {
        let quizResults = (Math.floor((score / MAX_QUESTIONS) * 100));
        localStorage.setItem("mostRecentScore", `${quizResults}`);
        localStorage.setItem("questionsCorrect", `${score}/${MAX_QUESTIONS}`);
        clearInterval(downloadTimer);
        //go to the end page
        return window.location.assign("end.html");
    }
    function getRandomQIndex() {
        let randomIndex = Math.floor(Math.random() * availableCountries.length);
        return availableCountries[randomIndex];
    }

    function questionName() {
        let index = getRandomQIndex();
        let countryName = index.name;
        return countryName;
    }

    function questionIndex() {
        let ques = questionName();
        let index = availableCountries.findIndex(x => x.name === ques);
        return index;
    }

    let countryIndex = questionIndex();

    function displayQuestion() {
        let question = document.getElementById('question-hidden');
        let flag = document.getElementById('question');
        flag.src = availableCountries[countryIndex].flag;
        question.innerHTML = availableCountries[countryIndex].name;
    }

    function getRandomAnswer() {
        let randomIndex = Math.floor(Math.random() * countriesISO.length);
        return countriesISO[randomIndex].name;
    }

    function displayAnswers() {
        let answerChoices = [];
        answerChoices.push(availableCountries[countryIndex].name);

        while (answerChoices.length < 4) {

            getRandomAnswer();

            const newAnswer = getRandomAnswer();

            if (!answerChoices.includes(newAnswer)) {

                answerChoices.push(newAnswer);
            }
        }
        answerChoices.sort(function(){return 0.5 - Math.random();});

        let answersElements = document.getElementsByClassName("answer");

        for (let i = 0; i < 4; i++) {
            answersElements[i].innerHTML = answerChoices[i];
        }
    }
    time.style.display = "block";
    modal.style.display = "none";
    questionCounter++;
    questionCounterText.innerText = `${questionCounter}/${MAX_QUESTIONS}`;
    time.innerText = 10;
    displayAnswers();
    displayQuestion();
    timerShow();
    availableCountries.splice(countryIndex, 1);
    acceptingAnswers = true;
}
function correctAnswer() {
    time.style.display = "none";
    modal.style.display = "block";
    modalContent.innerHTML = ("Congratulations! Your answer is <b>correct!</b>");
}

function incorrectAnswer() {
    time.style.display = "none";
    modal.style.display = "block";
    modalContent.innerHTML = (`Sorry, the correct asnwer was <b> ${question.innerText} </b>.`);
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
        acceptingAnswers = false;

        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.innerHTML;
        const classToApply = selectedAnswer === question.innerText ? "correct" : "incorrect";

        setTimeout(() => {
            if (classToApply === "correct") {
                incrementScore(INCREMENT_SCORE);
                correctAnswer();
            } else {
                incorrectAnswer();
            }
        }, 500);

        selectedChoice.classList.add(classToApply);
        clearInterval(downloadTimer);

        setTimeout(() => {
            selectedChoice.classList.remove(classToApply);
            modal.style.display = "none";
            timerShow();
            getNewQuestion();
        }, 2500);

    });
});

// This function increments the score
function incrementScore(num) {
    score += num;
    scoreText.innerText = score;
}