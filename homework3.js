/////////////////////////////////////////////////////////////
// Title: 	Homework 3
// Author: 	Brian Waters
/////////////////////////////////////////////////////////////

///////////////////////////////////////////
// ------------- Functions ------------- //
///////////////////////////////////////////

// ------------- Homework Functions ------------- //
// 1. Function to randomly generate string with length 15-25 inclusive
function genString(min,max) {
	var strLen = 0;
	var charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789.-_";
	var str = '';

	// Determine length of word to be generated
	strLen = genRandomInt(min,max);

	// Generate word of length strLen from the characters in charSet
	for (var i=0; i < strLen; i++) {
        str += charSet.charAt(Math.floor(Math.random() * charSet.length));
	}
	return str;
}

// 2. Function to generate array of strings
function genArrayOfStrings(arrSize, strLenMin, strLenMax) {
	var arr = [];

	for (var i=0; i < arrSize; i++) {
		arr.push(genString(strLenMin,strLenMax));
	}
	return arr;
}

// 3. Check each string in array for numbers and remove if they contain numbers
function removeNumericStrings(arr) {
	var arrLen = arr.length;
	var nonNumericArr = [];

	for (var i=0; i < arrLen; i++) {
		if (!checkNumeric(arr[i])) {
			nonNumericArr.push(arr[i]);
		}
	}

	return nonNumericArr;
}

// 4. Take 300 element function and return 300 dom elements
function appendDOMElements(arr) {
	var arrLen = arr.length;
	var tempElem = document.createElement('div');

	for (var i=0; i < arrLen; i++) {
		// to create a dom element
		tempElem = document.createElement('div');

		// to add content to an element
		tempElem.innerHTML = arr[i];
		tempElem.className = 'strElemClass';

		// to append one element to body
		document.body.appendChild(tempElem);
	}
}

// ------------- Extra Functions ------------- //

// Generate random integer between min and max
function genRandomInt(min,max) {
	var randInt = Math.floor(Math.random() * (max-min+1)+min);
	return randInt; 
}

// Check string for numbers
function checkNumeric(str) {
	var isNumeric = /\d/.test(str);
	return isNumeric;
}


//////////////////////////////////////
// ------------- Main ------------- //
//////////////////////////////////////

console.log('Function 1: genString');
console.log(genString(15,25));
console.log(genString(15,25));
console.log(genString(15,25));

console.log('Function 2: genArrayOfStrings');
var arrTest = genArrayOfStrings(200,25,35);
console.log(arrTest.slice(0,4));
console.log(arrTest.length);

console.log('Function 3: removeNumericStrings');
console.log(removeNumericStrings(arrTest).length);

console.log('Function 4: appendDOMElements');
appendDOMElements(genArrayOfStrings(300,65,80))