/////////////////////////////////////////////////////////////
// Title: 	Homework 1 
// Author: 	Brian Waters
/////////////////////////////////////////////////////////////

// Define variables
var N = 365;
var arr = new Array(N);
var hasBeenMatched = false;
var rand_index = 0;
var rand_guess = 0;
var arr_guesses = [];
var count = 0;

// Populate array
for(var i = 0; i < N; arr[i] = i + 1, i++){}

// Loop selecting random variable 
while (!hasBeenMatched) {
	rand_index = genRandom(1,N);
	rand_guess = arr[rand_index];

	// Check if this guess matches a previous one
	if(arr_guesses.indexOf(rand_guess) != -1){
		console.log(count+1 + ' guesses required!');
		hasBeenMatched = true;
	}

	// Otherwise, store this guess and increment index
	arr_guesses.push(rand_guess);
	count++;
}


// Function to generate random number between 1 and 365
function genRandom(min,max){
	var ran = Math.floor(Math.random() * max) + min;
	return ran;
}

// Note: I created 'arr' with a fixed length as I knew how
// many elements were going in to it.
// I defined 'arr_guesses' as an empty array and am dynamically
// updating it's size using push in an attempt to save memory.
// Is this the correct way to do it?
// Should I have just defined both arrays one way or another?