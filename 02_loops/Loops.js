
function repeat(text, limit) {
	//blank newtext for baseline
	var newtext = "";
	//iterate through, repeat until limit, print final newtext 
	for (i = 0; i < limit; i++) {
		newtext+=text
	};
	return newtext;
};

function join(array,delimiter) {
	var arrayContents = "";
	//set the baseline delimiter, if no delimiter is present, no delimiter will be written
	if (delimiter == undefined) {var delimiter = ""};
	//if there is no array present, return a warning to the user
	if (array == undefined || !Array.isArray(array)) {return "Not an array! Try again, boss!"};
	for (i = 0; i < array.length; i++){
		if (i < array.length - 1) {
		//only use delimiter if we are not at the end of the array
		var arrayContents = arrayContents + array[i].toString() + delimiter;
		}
		else {arrayContents = arrayContents + array[i].toString();}
	};
	return arrayContents;
};

function sum(array) {
//set base value for sum
var sum = 0;
//if no array is present, return baseline sum value
if (array == undefined || !Array.isArray(array)) {
	return 0;
}
else {
	//add values to sum for each indivl value in array, then return
	for (i = 0; i<array.length; i++){
		sum += array[i];
	}
	return sum;
}
};

function paramify(hash) {
//return blank if hash field is empty
if (hash == undefined) {return ""};
//create blank array to push values to.
var hashArray = [];
for (var prop in hash) {
	//check if the object is inherited by prototype. if not inherited, push to array
	if (hash.hasOwnProperty(prop)) {hashArray.push(prop + "=" + hash[prop])};
};
//return parameterized hash, sorted in alphabetical order
return(hashArray.sort().join("&"));
};

function factorial(num){
	//set baseline factorial
	var factorial = 1;
	//if number is 0, return 1
	if (num == 0) {return 1};
	if (isNaN(num)) {return "Not a number! Try again, boss."};
	for (i = num; i > 0; i--){
		//run down the list, multiplying factorial by the next lowest number, 
		//until i=0, eg 5*4, then 4*3, etc
		factorial *= i;
	}
	return factorial;
};

function concat_string() {
	//set empty array for arguments
	var argsArray = [];
	//run down the length of all arguments, pushing them to the array
	for (i = 0; i < arguments.length; i++) {
		argsArray.push(arguments[i]);
	};
	//join all together, ignoring delimiter
	return argsArray.join('');
};