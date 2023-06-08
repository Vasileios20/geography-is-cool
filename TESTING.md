The project has been tested in the following browsers Google Chrome, Firefox, Safari and Opera.

# Contents 

* [JSHint](#jshint)
* [W3C Validator](#w3c-validator)
* [Lighthouse](#lighthouse)
  * [Lighthouse Desktop](#lighthouse-desktop)
  * [Lighthouse Mobile](#lighthouse-mobile)
* [WAVE](#wave)
* [Manual Testing](#manual-testing)
* [Bugs](#bugs)
  * [Solved Bugs](#solved-bugs)
  * [Known Bugs](#known-bugs)

W3C Validator have been used to check the HMTL & CSS.

Google Developer tools have been used through the developement of the project to address any issues and to test responsiveness in various sceen sizes.

WAVE have been used to test the accessibility of the site.

## JSHint

[script.js](documentation/images/script-js.png)

[end.js](documentation/images/end-js.png)

[highscores.js](documentation/images/hidhscores-js.png)

## W3C Validator

[Home Page](documentation/images/)

## Lighthouse

### Lighthouse Desktop

* [index.html](documentation/images/index-html.png)
* [end.html](documentation/images/end-html.png)

### Lighthouse Mobile

* [index.html](documentation/images/index-mobile.png)
* [end.html](documentation/images/end-mobile.png)

## Manual Testing

|Feature|Expected Outcome|Testing Performed|Result|Pass/Fail|
|--|--|--|--|--|

Start Page
||||||
|--|--|--|--|--|
|Play button|Display the choose level section|Clicked button|Choose level section displayed|PASS|
|Highscores button|Display the highscores section|Clicked button|Highscores section displayed|PASS|
|All buttons hover effect|Buttons should transform/transit and get shadow|Hover over buttons|Style had been applied on all buttons|PASS|

Highscores Page
||||||
|--|--|--|--|--|
|Go Home button|Display the Start Page section|Clicked button|Start Page section displayed|PASS|
|Highscores list|Highscores displayed in ordered list|Saved 5 highscores|Highscores displayed in ordered list|PASS|
|Highscores list|Highscores displayed in order (higher number is better)|Played and saved 5 highscores|Highscores displayed in order (higher number is better)|PASS|
|Choose Level Page|
|All buttons hover effect|Buttons should transform/transit and get shadow|Hover over buttons|Style had been applied on all buttons|PASS|
|Go Back button|Display the Start Page section|Clicked button|Start Page section displayed|PASS|
|Buttons (10,25,50,All)|
||Display Game Page|Clicked button|Game Page section displayed|PASS|
||Start the game with correct amount of questions|Clicked button and played each level|Game started with the correct amount of questions|PASS|
||Start the game and display on game page correct question counter|Clicked button|Game started with correct question counter|PASS|

Game Page
||||||
|--|--|--|--|--|
|All answer buttons hover effect|Buttons should transform/transit, change back-ground color and get shadow|Hover over buttons|Style had been applied on all buttons|PASS|
|Answers populated|The answers from the array pulled and displayed correctly|Console log the data and checked that the answers have been pulled and displayed correctly|The answers displayes|PASS|
|Flag(question) populated|The flag(question) has been pulled from the answers array and displayed correctly|Console log the data and checked that the flag(question) have been pulled and displayed correctly|The flag displayed correctly|PASS|
|Timer|Timer displayed starts countdown from 10|Started game|Timer displayed and counting down from 10|PASS|
|Timer end|When timer reaches 0 diplay modal with message of correct answer and generate a new question|Started game and waited for timer to end|Modal displayed and a new question generated|PASS|
|Correct answer button|
||Change background color to green|Clicked on correct answer|Style applied|PASS|
||Display modal with a message for correct answer|Clicked on correct answer|Modal displayed|PASS|
|Wrong Answer Button|
||Change background color to red|Clicked on correct answer|Style applied|PASS|
||Display modal with a message for wrong answer|Clicked on wrong answer|Modal displayed|PASS|
|Question counter|Question increaces every new question|Console log the data and checked that the number increaces|Number increaced|PASS|
|Correct answer counter|Correct answer number increaces on correct answer|Clicked on correct answer|Number increaced|PASS|

End Page
||||||
|--|--|--|--|--|
|Final score|Display the final score as % with correct answers|Played a game checking manually the correct answers|Final score dispalyed correctly|PASS|
|Save button disabled/enabled|Not letting you press the button if username input is empty|Hover on button with empty field and then with a name typed|Unable to click the button with empty username input, button enabled with a name typed|PASS|
|Save button|On sublit redirect you to home page|Clicked on button|Redirected to home page|PASS|
|All buttons hover effect|Buttons should transform/transit and get shadow|Hover over buttons|Style had been applied on all buttons|PASS|
|Go Home button|Redirect you to the home page|Clicked on button|Redirected to home page|PASS|

## BUGS

### Solved Bugs
|#|Bug|Solution|
|--|--|--|
|1|When the game started the question counter was displaying undefined|I had to add a function to choose level page buttons to change the ```.innerHTML``` of the question counter on first display|
|2|classToApply for correct/wrong (green/red) wouldn't be applied on click|Following the tutorial to build the quiz the code was written ```selectedChoice.parentElement.classList.add(classToApply)``` I had to remove the ```.parentElement```
|3|Flags not diplayed on deployed site|I had to change the relevant path to the array of countries|
|4|Towards the end of all flags level some answers are repeated and at the very end the same answer is displayed on all 4 options.|After have a meeting with my mentor we decided it's better to have 2 arrays to get question and answers. I wrote the code again to generate answers from the main array (countriesISO) and questions from the second array (availableCountries), in which I can remove one question(flag). Then for the answers create an array of 4 items, one is the correct answer (from the question generated) and 3 random answers|


