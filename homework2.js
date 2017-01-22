/////////////////////////////////////////////////////////////
// Title: 	Homework 2
// Author: 	Brian Waters
/////////////////////////////////////////////////////////////

// ------------- Variables ------------- //
var arrTest = [1, 2, null, [3, 4], 5, [6, 7]];
var arrFlat = [];

///////////////////////////////////////////
// ------------- Functions ------------- //
///////////////////////////////////////////

// ------------- Homework Functions ------------- //
// 1. Function to flatten array
function flattenArr(arr) {
	var isFlat = false;
	var flattenedClean = [];

	if (checkFlat(arr)) return arr;

	while (!isFlat) {
		arr = removeSubarray(arr);
		isFlat = checkFlat(arr);
	}
	
	flattenedClean = cleanArray(arr);
	return flattenedClean;
}

// 2. Function to check if array is palindrome
function checkPalindrome(palStr) {
	var strLen = Math.ceil(palStr.length/2);
	var firstPart = palStr.slice(0,strLen);
	var secondPart = palStr.slice(-strLen);

	if (firstPart == reverseString(secondPart)) {
		return true;
	}

	return false;
}

// 3. Append word to string if that string doesn't
// already appear in the string
function appendWordToString(str, word) {
	var arr,
		cleanStr,
		cleanWord,
		hasWord;

	// Clean the string
	cleanStr = cleanWhitespace(str);
	cleanWord = word.trim();
	arr = cleanStr.split(' ');

	// Check if arr has word already
	hasWord = checkElementInArray(arr, cleanWord);

	if (!hasWord) {
		arr.push(cleanWord);
		cleanStr = arr.join(' ');
	}
	return cleanStr;
}

// 4. Remove all instances of word from string
function removeWordFromString(str, word) {
	var arr,
		cleanStr,
		cleanWord,
		hasWord;

	// Clean the string
	cleanStr = cleanWhitespace(str);
	cleanWord = word.trim();
	arr = cleanStr.split(' ');

	hasWord = checkElementInArray(arr, cleanWord);

	if (hasWord) {
		arr = removeElementsFromArray(arr, cleanWord);
		cleanStr = arr.join(' ');
	}
	return cleanStr;
}

// 5. Order HTML elements by text content
function orderHTMLElements(className) {
	var textArr = [];

	textArr = getClassInnerHTML(className);

	textArr.sort(function(a, b){return a-b});

	putClassInnerHTML(className, textArr);
}

// 6. Nature array analogy
// All of the species of a certain type of animal could be described by an array, for example breeds of dogs.
// Similarly, a tree could be described by an array, where each element could represent the branches of the
// tree and could contain the number of leaves on the branch, ie. a tree with two branches, one with 3 leaves
// and the other with 2 leaves could look like this:
// tree = [3,2]
// By using a dictionary, you could store information about the number of different animals in each country
// in the world:
// worldAnimals = {'Ireland':['Pigeon','Goat'], 'USA':['Eagle', 'Bear']};



// ------------- Extra Functions ------------- //

// Reverse a string
function reverseString(str) {
	return str.split("").reverse().join("");
}

// Remove nulls and empty elements from array
function cleanArray(arr) {
	return arr = arr.filter(function(n) {return n != undefined});
}

// Remove subarrays for single dimension. Will need to be repeated
// if multiple layers of subarrays.
function removeSubarray(arr) {
	var flattened = [].concat.apply([], arr);
	return flattened;
}

// Check an array for flatness, ie. check for subarrays
function checkFlat(arr) {
	for (var i = 0; i < arr.length - 1; i++) {
		if (Array.isArray(arr[i]) == true) return false;
	}

	return true;
}

// Trim beginning and end whitespace and remove multiple 
// internal whitespaces
function cleanWhitespace(str) {
	str = str.replace(/\s+/g,' ').trim();
	return str;
}

function checkElementInArray(arr, elem) {
	var index = arr.indexOf(elem);
	if (index > -1) return true;
	return false;
}

function removeElementsFromArray(arr, elem) {
	var index = arr.indexOf(elem);

	while (index > -1) {
		arr.splice(index, 1);
		index = arr.indexOf(elem);
	}

	return arr;
}

// Get all innerHTML from a specific class and return as array
function getClassInnerHTML(className) {
	var objLen = document.getElementsByClassName(className).length;
	var nodeObj = document.getElementsByClassName(className);
	var arr = [];

	for (var i = 0; i < objLen; i++) {
		arr[i] = nodeObj[i].innerHTML;
	}

	return arr;
}

// Take array of content and apply each to class of HTML element
function putClassInnerHTML(className, arr) {
	var objLen = document.getElementsByClassName(className).length;
	var nodeObj = document.getElementsByClassName(className);
	var arrLen = arr.length;

	for (var i = 0; i < arrLen; i++) {
			nodeObj[i].innerHTML = arr[i];
		}
}

//////////////////////////////////////
// ------------- Main ------------- //
//////////////////////////////////////

console.log('Function 1: removeSubarray');
arrFlat = flattenArr(arrTest);
console.log(arrTest);
console.log(arrFlat);

console.log('Function 2: checkPalindrome');
console.log('Checking \'naan\'');
console.log(checkPalindrome('naan'));

console.log('Function 3: appendWordToString');
console.log('Original string: \'   the   foo  bar   \'');
console.log('Append \'biscuit\'');
console.log(appendWordToString('   the   foo  bar   ','biscuit'));
console.log('Append \'foo\'');
console.log(appendWordToString('   the   foo  bar  biscuit ','foo'));

console.log('Function 4: removeWordFromString');
console.log('Original string: \'   the   foo  bar   \'');
console.log('Remove \'foo\'');
console.log(removeWordFromString('   the   foo  bar   ','foo'));

console.log('Function 5: orderHTMLElements');
console.log('Wait 3 seconds, then it will sort elements!');
setTimeout(orderHTMLElements, 3000, 'll-homework');

console.log('Question 6 can be found in \'homework2.js\' file beneath function 5');