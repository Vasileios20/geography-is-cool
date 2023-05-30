const saveButton = document.getElementById("btn-save");
const username = document.getElementById("username");
const finalScore = document.getElementById("final-score");
const mostRecentScore = localStorage.getItem("mostRecentScore");
finalScore.innerText = mostRecentScore;

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const MAX_HIGHSCORES = 5;

username.addEventListener("keyup", () => {
    saveButton.disabled = !username.value;
});

saveButton.addEventListener("click", (e) => {
    e.preventDefault();

    const score = {
        score : mostRecentScore,
        username : username.value
    };
    highScores.push(score);
    
    highScores.sort((a,b) => b.score -a.score);

    highScores.splice(5);

    localStorage.setItem("highScores", JSON.stringify(highScores));

    window.location.assign("index.html");

});