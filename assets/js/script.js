import { questions } from "./questions.js";
import { countries } from "./countries.js"


const startButton = document.getElementById('btn-start');

// Start(Play) game button
startButton.addEventListener('click', () => {
    chooseLevel();
    // create_user();
});

function chooseLevel() {
    var x = document.getElementById("start-page");
    var y = document.getElementById("choose-level");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
        y.style.display = "block"
    }

};