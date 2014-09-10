Array.prototype.valueShift = function(i) {
	this.push(this[i]);
	this[i] = "";
};

function translate(input) {
var inputArray = input.split(" ");
var outputArray = [];
    inputArray.forEach(function(word){
        for(var i =0; i < word.length; i++){
            if (word[i] === "a" ||word[i] === "e" ||word[i] === "i" || word[i] === "o" || word[i] === "u" ) { 
            	if (word[i] === "u" && word[i-1] === "q") {outputArray.push(word.substring(i+1))}
            	else {outputArray.push(word.substring(i))};
                for (j = 0; j < i; j++) {
                	outputArray.push(word[j]);
                }
                if (word[i] === "u" && word[i-1] === "q") {outputArray.push("uay");
            		break}
            outputArray.push("ay");
            break;
            }
        }
        outputArray.push(" ");
    });    
    //remove trailing spaces, useful for single word statements
    if (outputArray[outputArray.length-1] === " ") {
    	outputArray.pop(outputArray.length-1);
    }
    return outputArray.join("");
};