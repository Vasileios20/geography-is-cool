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
        y.style.display = "block";
    }
};
// Love maths code
let buttons = document.getElementsByClassName("btn-level");

for (let button of buttons) {
  button.addEventListener("click", function () {
    if (this.getAttribute("data-level") === "10-flags") {
      alert("You clicked 10");
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
}