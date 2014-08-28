function Calculator() {
	this.stack = [];
};

Calculator.prototype.value = function() {
	var finalValue = this.stack[this.stack.length-1];
	return finalValue;
};

Calculator.prototype.push = function(x) {
	this.stack.push(x);
};

Calculator.prototype.plus = function() {
	var workingField = 0;
	if (this.stack.length == 0) {throw "calculator is empty";};
	var operand1 = this.stack.pop();
	var operand2 = this.stack.pop();
	workingField = operand2 + operand1;
	this.stack.push(workingField);
};

Calculator.prototype.minus = function() {
	var workingField = 0;
	if (this.stack.length == 0) {throw "calculator is empty";};
	var operand1 = this.stack.pop();
	var operand2 = this.stack.pop();
	workingField = operand2 - operand1;
	this.stack.push(workingField);
};

Calculator.prototype.divide = function() {
	var workingField = 0;
	if (this.stack.length == 0) {throw "calculator is empty";};
	var operand1 = this.stack.pop();
	var operand2 = this.stack.pop();
	workingField = operand2 / operand1;
	this.stack.push(workingField);
};

Calculator.prototype.times = function() {
	var workingField = 0;
	if (this.stack.length == 0) {throw "calculator is empty";};
	var operand1 = this.stack.pop();
	var operand2 = this.stack.pop();
	workingField = operand2 * operand1;
	this.stack.push(workingField);
};