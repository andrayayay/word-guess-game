// array 

var states = ["texas", "wisconsin", "washington", "hawaii", "alaska", "california","minnesota","louisana", "georgia"];
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var letter;
var currentAnswer;
var answerDashes;
var gameStart = false;
var guessesLeft;
var lettersGuessed = [];
var correctGuesses;
var numWins = 0;
var createNewWord;
var stateArrayIndex; 
var wordsArray = [];
var dashesArray = [];

// Start game 
// Press any key to start...
// Declare variables 

function initialize() {
	gameStart = true;
	correctGuesses= 0;

	// generates a random word 
	stateArrayIndex = Math.floor(Math.random() * 9);
	currentAnswer = states[stateArrayIndex]
	console.log(states);
	console.log(stateArrayIndex);
	// guesses left equation
	guessesLeft = 12 
	console.log(currentAnswer);
	// Split random word into individual letters and dashes
	answerDashes = wordIntoDashes(currentAnswer);	//string of dashes
	wordsArray = currentAnswer.split('');			//breaks down answer into letters
	dashesArray = answerDashes.split('');	
	console.log(answerDashes);	//breaks down letters into dashes
	// Make it show in HTML 

	// console.log(document.getElementsByClassName("currentAnswer")[0] = "Words");
	// var x = document.getElementsByClassName("currentAnswer")
	// x[0].innerHTML = "NEW wrds";
	// window.onload = function (){
		// document.getElementById('#currentAnswer').innerHTML = answerDashes;
		// };
	// window.onload = function what(){
			// document.getElementById('#lettersGuessed').innerHTML = "--";
			// };
	// window.onload = function what(){
			// document.getElementById('#guessesLeft').innerHTML = guessesLeft;
				// };
	document.getElementById("currentAnswer").innerHTML = answerDashes;
	document.getElementById("lettersGuessed").innerHTML = "--";
	document.getElementById("guessesLeft").innerHTML = guessesLeft;

	// .innerHTML = "showmesomething";
	// document.getElementsByClassName("lettersGuessed").innerHTML = "--";
	// document.getElementsByClassName("guessesLeft").innerHTML = guessesLeft;
}
initialize()

// User can press any letter to get started	
// As a key is clicked, letter will show up from an underscore
// it will show as 'letterGuessed' or 'correctGuesses'
// create for loop

function wordIntoDashes(word) {
	var dashes = "";
	for (i = 0; i < word.length - 1; i++) {
		dashes += "_ ";
	}
	dashes += "_";
	return dashes;
}
// function that controls what happenes when a letter is pressed
function gameStart(letterTyped) {
	var letter = letterTyped.toLowerCase();

	if (alphabet.indexOf(letterTyped) > -1) {
		if (wordsArray.indexOf(letterTyped) > -1) {
			correctGuesses++;
			displayLetter(letterTyped);
			guessesLeft--;
			document.getElementById("#guessesLeft").innerHTML = guessesLeft;
		}
		else {
			lettersGuessed.push(letterTyped)
			guessesLeft--;
			document.getElementById("#lettersGuessed").innerHTML = lettersGuessed.join(' ');
		}
		
	
	} 

// this displays a letter if it's in the answer
function displayLetter(letter) {
	// for each char in wordAsDashes, if matches currentWord --> display
	for (i = 0; i < currentAnswer.length; i++) {
		if (letter == wordsArray[i]) {
			dashesArray[i * 2] = letter;
			console.log(dashesArray);
		}
	}
	document.getElementById("#currentAnswer").innerHTML = dashesArray.join("");
	checkForWin();
}


// If user guesses word correctly, answer (and image will show)
function checkForWin() {
	if (dashesArray.indexOf("_") === -1) {
		alert("Great job! The answer is " + currentAnswer);
		numWins++;
		document.getElementById("#numWins").innerHTML = numWins;
		initialize();
	}
}

document.onkeyup = function (event) {

	if (event.key===lettersGuessed) {
		document.getElementById("#startKey").innerHTML = "";
		document.getElementById("#currentAnswer").innerHTML = answerDashes.split(",");
		console.log(currentAnswer);
		gameStart = true;
		}
	else {
		gameStart(event.key);
	} 
}
}




// Automatically choose another word after game is over