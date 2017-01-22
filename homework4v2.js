/////////////////////////////////////////////////////////////
// Title: 	Homework 4
// Author: 	Brian Waters
/////////////////////////////////////////////////////////////

///////////////////////////////////////////
// ------------- Functions ------------- //
///////////////////////////////////////////

// ------------- Homework Functions ------------- //

// 1. Create div and table within that div
function createDatePicker(month, year) {
	var tabObj, tabClassName = 'dp__table';

	tabObj = genTable(tabClassName);
	appendHeader(tabObj, month, year);
	appendDayTitleRow(tabObj);
	fillDates(tabObj, month, year);
}


// ------------- Extra Functions ------------- //

// Create table with id = Name
function genTable(className) {
	var table = document.createElement('table');
	table = addDOMClassName(table, className);
	document.body.appendChild(table);
	return table;
}

// Generate header for Datepicker table
function appendHeader(table, month, year) {
	var header = table.createTHead();
	var row = header.insertRow();
	var headerCell = document.createElement('th');
	var monthNames = [	'January',
						'February',
						'March',
						'April',
						'May',
						'June',
						'July',
						'August',
						'September',
						'October',
						'November',
						'December'];

	headerCell.colSpan = 7;
	headerCell.innerHTML = '< ' + monthNames[month] + ' ' + year + ' >';
	headerCell = addDOMClassName(headerCell, 'dp__header');

	row.appendChild(headerCell);
}

// Generate a row for the days of the week
function appendDayTitleRow(table) {
	var row = table.insertRow();
	var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
	var daysLen = days.length;
	var tmp;

	for (var i=0; i<daysLen; i++) {
		tmp = row.insertCell(i);
		tmp.innerHTML = days[i];
	}

	row = addDOMClassName(row, 'dp__row--border-bottom');
}

// Fill in dates for each day in the specified month
function fillDates(table, month, year) {
	var day = new Date(year, month);
	var initDay = day.getDay();
	var currMonth = day.getMonth();
	var row, cell;

	// Ensure we have first day of the week
	if (initDay !== 0) {
		day.setDate(day.getDate() - initDay);
	}
	
	// Update day and check for 
	currDay = day.getDate();
	while (currMonth === month) {
		row = table.insertRow();
		for (var i=0; i<=6; i++) {
			cell = row.insertCell();
			currMonth = day.getMonth();
			currDay = day.getDate();
			cell.innerHTML = currDay;
			cell = addDOMClassName(cell,'dp__cel'l);
			if (currMonth !== month) {
				cell = addDOMClassName(cell,'dp__cell--faded');
			}
			day.setDate(day.getDate() + 1);
		}
		currMonth = day.getMonth();
	}
}

// Add a class name to DOM object provided it doesn't already exist
function addDOMClassName(domObj, newClassName) {
	var origClassName = domObj.className;

	domObj.className = appendWordToString(origClassName, newClassName);
	return domObj;
}

// Append word to string if that string doesn't
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

// Trim beginning and end whitespace and remove multiple 
// internal whitespaces
function cleanWhitespace(str) {
	str = str.replace(/\s+/g,' ').trim();
	return str;
}

// Check if element exists in array
function checkElementInArray(arr, elem) {
	var index = arr.indexOf(elem);
	if (index > -1) return true;
	return false;
}

///////////////////////////////////////////
// --------------- Main ---------------- //
///////////////////////////////////////////

createDatePicker(08,2015);
