(function() {
	'use strict';

	var view, model, controller;

	view = {
		ele: null,
		wrap: null,
		nav: null,
		month: null,
		dates: [],

		init: function() {
			this.initEle();
			this.initNav();
			this.initTitleRow();
			this.initDates();
			return this;
		},

		initEle: function() {
			this.ele = document.querySelector('[datepicker]');
			this.wrap = document.createElement('table');
			this.ele.appendChild(this.wrap);
		},

		initNav: function() {
			var frag = document.createDocumentFragment();

			var header = this.wrap.createTHead();
			var row = header.insertRow();
			this.nav = document.createElement('th');
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

			this.nav.colSpan = 7;
			this.nav.innerHTML = '< ' + monthNames[1] + ' ' + '2017' + ' >';
			this.nav = addDOMClassName(this.nav, 'dp__nav');

			row.appendChild(this.nav);
			frag.appendChild(row);

			this.wrap.appendChild(frag);
		},

		initTitleRow: function() {
			var row = this.wrap.insertRow();
			var days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
			var daysLen = days.length;
			var tmp;

			for (var i=0; i<daysLen; i++) {
				tmp = row.insertCell(i);
				tmp.innerHTML = days[i];
			}

			row = addDOMClassName(row, 'dp__row--border-bottom');
		},

		initDates: function() {
			var date, row;
			for (var i = 0; i < 6; i ++) {
				row = this.wrap.insertRow();
				for (var j = 0; j < 7; j ++) {
					date = row.insertCell();
					date = addDOMClassName(date,'dp__cell');
					this.dates.push(date);
					this.wrap.appendChild(date);
				}
			}
			this.refreshDates(model.refreshData());
		},

		refreshDates: function(modelDates) {
			for(var i = 0; i < 42; i++) {
				this.dates[i].innerText = modelDates[i];
			}
		},
	},

	model = {
		data: {
			yearMonth: {
				year: null,
				month: null
			},
			dates: Array(42)
		},

		init: function() {
			this.setYearMonth({
				year: 2017,
				month: 0
			});
			this.refreshData();
		},

		refreshData: function() {
			var ym = this.getYearMonth(),
				y = ym.year, m = ym.month,
				offset = this.getOffset(y, m),
				numOfDays = this.getNumOfDaysInAMonth(y, m),
				c = 1;

			for(var i = 0, ln = this.data.dates.length; i < ln; i++) {
					this.data.dates[i] = (i >= offset && i < numOfDays + offset) ? c++ : null; 
			}

			return this.data.dates;
		},

		getYearMonth: function() {
			return this.data.yearMonth;
		},

		setYearMonth: function(yearMonth) {
			this.data.yearMonth = yearMonth;
			this.updateYearMonth();
		},

		updateYearMonth: function() {
			this.refreshData();
		},

		getNextMonth: function(year, month) {
			return {
				month : month === 11 ? 0 : month + 1,
				year : month === 11 ? year + 1 : year
			};
		},

		getPreMonth: function(year, month) {
			return {
				month : month === 0 ? 11 : month - 1,
				year : month === 0 ? year - 1 : year
			};
		},

		getOffset: function(year, month) {
			console.log(year, month);
			return ((new Date(year, month, 1)).getDay() + 6) % 7;
		},

		getNumOfDaysInAMonth: function(year, month) {
			return (new Date(year, month + 1, 0)).getDate();
		}
	},

	controller = (function(v, m) {
		m.init();
		v.init();

		/*var onClickNext = function() {
			m.setYearMonth();
			v.setData(m.getData());
		};
		var onClickPre = function() {
			m.setYearMonth();
			v.setData(m.getData());
		};
		var onClickDate = function() {
			// maybe show events calendar for this date :)
		};

		v.onClickLeft = onClickNext;
		v.onClickRight = onClickPre;*/

	})(view, model)
})();

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

// datepicker.refreshDates(datepicker.model.data)





/*table
	header
		nav
		month
	body
		daysrow
		daterow1
		daterow2
		daterow3
		daterow4
		daterow5
		daterow6*/