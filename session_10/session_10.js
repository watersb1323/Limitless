(function($) {
	'use strict';

	// console.log(bbEle)
	// setTimeout(function	() {
	// 	bbEle.hide().slideDown(2000);
	// 	bbEle.fadeIn(2000);
	// }, 2000);
	// var bbEle = $('.bumblebee');

	var mask = {
		ele: $('.mask'),
		container: $('.mask__container'),
		setContent: function (content) {
			this.container.html(content);
		}
	};

	var makeIcon = function(config) {
		var loading = {
			sizes: {
				tiny: {
					height: 20,
					width: 20,
				},
				med: {
					height: 50,
					width: 50
				}
			},
			ele: $('<div>'),
			size: config.size || 'tiny',
			LIFE_SPAN: 10000,
			init: function() {
				this.ele.style.height = this.sizes[size].height;
			},
			show: function() {
				this.ele.fadeIn();
				setTimeout(function	() {
					me.hide();
				}, me.LIFE_SPAN)
			},
			hide: function() {
				this.ele.fadeOut();
			},
			timeout: function() {
				this.hide();
			}
		};
		return loading;
	}


	var api = {
		fetchEvents: function(url, methodType, callback) {
			var data = [];
			//talk to the server
			return callback(data);
		}
	}

	var datePicker = {
		mask: mask,
		loading: makeIcon({
			size: 'tiny',
		}),
		api: api,
		eventContent: {},
		onClickDates: function() {
			var me - this;
			this.loading.show();
			this.api.fetchEvents('url', 'post', me.onData);
			// event is asynchronous
			// synchronous: carwash, then dry-cleaner
			// asynchronous: while car washing, you can go to dry cleaner
		},
		onData: function(newData) {
			mask.setContent(this.eventContent).show();
		}
	};
})(jQuery);