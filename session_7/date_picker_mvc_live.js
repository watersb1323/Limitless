var datepicker = {
	ele: null,
	wrap: null,
	nav: null,
	month: null,
	dates: [],

	refreshDates: function(dataDates) {
		for(var i = 0; i < 42; i++) {
			this.dates[i].innerText = dataDates[i];
		}
	},

	dataModel: {
		yearMonth: {year: null, month: null},
		data: Array(42),
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

			for(var i = 0, ln = this.data.length; i < ln; i++) {
					this.data[i] = (i >= offset && i < numOfDays + offset) ? c++ : null; 
			}

			return this.data;
		},

		getYearMonth: function() {
			return this.yearMonth;
		},

		setYearMonth: function(yearMonth) {
			this.yearMonth = yearMonth;
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

	init: function() {
		this.initEle();
		this.initMonth();
		return this;
	},

	initEle: function() {
		this.ele = document.querySelector('[datepicker]');
		this.wrap = document.createElement('ul');
		this.ele.appendChild(this.wrap);
	},

	initMonth: function() {
		var date;
		var frag = document.createDocumentFragment();
		for(var i = 0; i < 42; i ++) {
			date = document.createElement('li');
			this.dates.push(date);
			frag.appendChild(date);
		}

		this.wrap.appendChild(frag);
	},
};

var myDP = datepicker.init();
console.log(myDP.dataModel.init())
datepicker.refreshDates(datepicker.dataModel.data)