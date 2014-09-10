function forEach (x, action) {
	for (i = 0; i < x.length; i++) {
		action(x);
	}
}

function countWords (x) {
var spaceCount = 1;
	forEach (x, function () {
		if (x.charAt(i) == " ") {
			spaceCount++
		}
	});
	return spaceCount;
};

function makeAdder(x) {
	x += x;
}