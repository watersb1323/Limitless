/////////////////////////////////////////////////////////////
// Title: 	Homework 5 - Xmas
// Author: 	Brian Waters
/////////////////////////////////////////////////////////////

///////////////////////////////////////////
// ------------- Functions ------------- //
///////////////////////////////////////////

// ------------- Homework Functions ------------- //

// 1. Convert flat array to tree array


// ------------- Extra Functions ------------- //

// Determine parent
function convertFlatToTree(arr) {
	var arrLen = arr.length;
	var parentId = '';
	var indexArr = [];
	var tree = {};

	var processData = {root: {}};

	for (var i=0; i < arrLen; i++) {
		if (arr[i].parent === parentId) {
			tree = arr[i];
			parentId = arr[i].Id;
			break;
		}
	}

	for (var i=0; i < )

	console.log(tree);
	return tree;
}


///////////////////////////////////////////
// --------------- Main ---------------- //
///////////////////////////////////////////

var dataArr = [
    {"Id":"1", "Name":"abc", "parent":""},  
    {"Id":"2", "Name":"abc", "parent":"1"},
    {"Id":"3", "Name":"abc", "parent":"2"},
    {"Id":"4", "Name":"abc", "parent":"2"}
];

convertFlatToTree(dataArr);