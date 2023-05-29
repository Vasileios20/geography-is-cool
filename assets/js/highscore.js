const highScoresList = document.getElementById("highscores-list");
const highscores = JSON.parse(localStorage.getItem("highScores")) || [];

highScoresList.innerHTML = highscores
    .map(score => {
        return `<li class="high-score" >${score.username} - ${score.score}</li>`;
    })
    .join("");