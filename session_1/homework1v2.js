/////////////////////////////////////////////////////////////
// Title: 	Homework 1 
// Author: 	Brian Waters
/////////////////////////////////////////////////////////////

// Define variables
var N = 365;
var arr_numbers = [];
var hasBeenMatched = false;
var rand_guess = 0;
var arr_guesses = [];
var count = 0;

// Function to generate random number between 1 and 365
function genRandom(min,max){
	var ran = Math.floor(Math.random() * max) + min;
	return ran;
}

// Function to populate an array
function popArray(min,max){
	var arr = [];
	for(var num = min; num <= max; arr.push(num), num++){}
	return arr;
}

// Function to generate random guess
function genGuess(arr,N){
	var rand_index = genRandom(1,N);
	return arr[rand_index];
}

// Populate array
arr_numbers = popArray(1,N);

// Loop selecting random variable 
while (!hasBeenMatched) {
	// Generate random guess
	rand_guess = genGuess(arr_numbers,N);

	// Check if this guess matches a previous one
	if(arr_guesses.indexOf(rand_guess) != -1){
		console.log(count+1 + ' guesses required!');
		hasBeenMatched = true;
	}

	// Otherwise, store this guess and increment index
	arr_guesses.push(rand_guess);
	count++;
}


// Note: I created 'arr' with a fixed length as I knew how
// many elements were going in to it.
// I defined 'arr_guesses' as an empty array and am dynamically
// updating it's size using push in an attempt to save memory.
// Is this the correct way to do it?
// Should I have just defined both arrays one way or another?