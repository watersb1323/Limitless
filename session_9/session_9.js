var SmartInput = function() {
	this.ele = null;
};

SmartInput.prototype.init = function() {
	this.initEle();
	this.initEvents();
};

SmartInput.prototype.initEle = function() {
	this.ele = document.createElement('input');
};

SmartInput.prototype.initEvents = function() {
	var me = this;
	this.ele.addEventListener('keyup', me.onKeyup.bind(me, me.ele))
};

SmartInput.prototype.onKeyup = function() {
	// allKeyUpRelatedFunctions
};

var listItem = function() {
	this.data = null;
	this.ele = nulll;
	this.profilePictureEle = null;
	this.messageEle = null;
	this.type = null;
};

listItem.prototype.setData = function(data) {
	this.data = data;
	this.updateData(data);
}

listItem.prototype.updateData = function(newData) {
	this.updatePic(newData);
	this.updateMessage(newData);
}

var li = new listItem();

var list = {
	ele: null,
	items: [],
	data: null,
	init: function() {
		this.initEle();
	},
	initEle: function() {
		this.ele = document.createElement('div');
		this.ele.className
	}
}