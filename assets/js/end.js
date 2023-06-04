// Code borrowed from https://www.youtube.com/watch?v=Opje9VBrNfg&t=1791s 
const saveButton = document.getElementById("btn-save");
const username = document.getElementById("username");
const finalScore = document.getElementById("final-score");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const questionsCorrect = localStorage.getItem("questionsCorrect");
finalScore.innerText = `${mostRecentScore} | ${questionsCorrect}`;

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const MAX_HIGHSCORES = 5;

username.addEventListener("keyup", () => {
    saveButton.disabled = !username.value;
});

saveButton.addEventListener("click", (e) => {
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        username: username.value,
        correct: questionsCorrect
    };
    highScores.push(score);

    highScores.sort(function (a, b) { return b.score - a.score });

    highScores.splice(5);

    localStorage.setItem("highScores", JSON.stringify(highScores));

    window.location.assign("index.html");

});