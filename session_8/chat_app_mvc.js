(function() {
	'use strict';

	var view, model, controller;

	view = {
		ele: null,
		inputBox: null,
		chatComps: [],
		dates: [],
		onClickLeft: null,
		onClickRight: null,

		init: function() {
			this.initEle();
		},

		initEle: function() {
			this.ele = document.querySelector('[chatapp]');
			this.inputBox = document.createElement('input');
			this.inputBox.type = "text";
			this.inputBox.className = 'ca__input-box';

			this.refreshChat(model.chatHistory);
		},

		initEvent: function() {
			var me = this;
			this.inputBox.addEventListener('keyup', me.onClickEnter.bind(me));
		},

		refreshChat: function(modelData) {
			var indexChatComps = this.chatComps.length;
			var indexModelMsgs = modelData.length;

			// Add necessary extra divs for chat messages
			for (var i = indexChatComps; i < indexModelMsgs; i++) {
				var msg = document.createElement('div');
				msg.className = 'ac__chat-display__chat-history__chat-message';
				if (i % 2 === 0) msg = addDOMClassName(msg,'ac__chat-display__chat-history__chat-message--even');
				else msg = addDOMClassName(msg,'ac__chat-display__chat-history__chat-message--odd');
				this.chatComps.push(msg);
				this.ele.appendChild(msg);
			}

			// Update chat text for each div element
			for(var i = 0; i <= indexChatComps; i++) {
				this.chatComps[i].innerText = modelData[i];
			}

			// Add input box at the bottom of the chat for the next message
			this.inputBox.value = null;
			this.ele.appendChild(this.inputBox);
		},
	},

	model = {
		chatHistory: [],

		init: function() {
			this.addMessage('Welcome to Chat!');
		},

		getChatHistory: function() {
			return this.chatHistory;
		},

		getInputText: function() {
			var ele = document.querySelector('.ca__input-box');
			return ele.value;
		},

		addMessage: function(text) {
			this.chatHistory.push(text);
		}
	},

	controller = (function(v, m) {
		m.init();
		v.init();

		var onClickEnter = function(event) {
			// console.log(event.keyCode)
			if (event.keyCode == 13) {
				m.addMessage(m.getInputText());
				v.refreshChat(m.getChatHistory());
			}
		};

		v.onClickEnter = onClickEnter;
		v.initEvent();

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