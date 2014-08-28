function Calculator() {
	this.baseline = 0;
};

// {basline: 0}
Calculator.prototype.value = function(){
	return this.baseline;
};

Calculator.prototype.add = function(x) {
	this.baseline += x;
};

Calculator.prototype.subtract = function(x) {
	this.baseline -= x;
};