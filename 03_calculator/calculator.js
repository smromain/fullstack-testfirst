function Calculator() {
	// {}
	this.baseline = 0;
	
	// return {basline: 0}
	// return this.baseline;
};

// {basline: 0}
Calculator.prototype.value = function(){
	return this.baseline;
	
	// this.value = this.baseline;
	// {
	// 	basline:0, 
	// 	value:0
	// }
	// return this.value;
};

Calculator.prototype.add = function(x) {
	this.baseline += x;
	// return this.value;
};

Calculator.prototype.subtract = function(x) {
	this.baseline -= x;
	// return this.value;
};