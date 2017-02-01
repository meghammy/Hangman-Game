


var dog = [
	["P","O","O","D","L","E"],
  	["K","O","N","G","T","O","Y"],
  	["B","U","L","L","D","O","G"],
  	["P","O","O","P","B","A","G"],
  	["T","E","N","N","I","S","B","A","L","L"],
  	["L","E","A","S","H"]
]

var random = Math.floor((Math.random()*(dog.length-1))); 

var word = dog[random];

var wordlength= new Array(word.length);
var trys = 5; document.getElementById("trys");

for (var i = 0; i < wordlength.length; i++){
	wordlength[i] = "_ ";
	console.log(word[i]);
}



function printGuesses(){
	for (var i = 0; i < wordlength.length; i++){
		var dashes = document.getElementById("dashes");
		var wordfield = document.createTextNode(wordlength[i]);
		dashes.appendChild(wordfield);
		console.log(wordlength[i]);
	}
}

var guessfunc = function(){
	var f = document.guessform; 
	var b = f.elements["guess"]; 
	var userguess = b.value;
	userguess = userguess.toUpperCase();

	for (var i = 0; i < wordlength.length; i++){
		if(wordlength[i] === userguess){
			wordlength[i] = userguess("guesses") + " ";
			var correct = true;
			console.log(userguess);
		}
		b.value = "";
	}
	
	var dashes = document.getElementById("dashes"); 
	dashes.innerHTML=""; 
	printGuesses();

	if(!correct){
		var guesses = document.getElementById("guesses");
		var letters = document.createTextNode(" " + userguess);
		guesses.appendChild(letters); 
		trys --;
	}

	var finished = true; 
	for (var i = 0; i < wordlength.length; i++){
		if(wordlength[i] === "_ "){
			finished = false;
		}
	}
	if(finished){
		var messages = document.getElementById("messages");
		var message= document.createTextNode("<p>You Win!</p>");
		messages.innerHTML= message;
	}

	if(trys === 10){
		var messages = document.getElementById("messages");
		var message= document.createTextNode("<p>You Lose!</p>");
		messages.innerHTML= message;
	}
}

function init(){
	printGuesses();
}

window.onload = init;







