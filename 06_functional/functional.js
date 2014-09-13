
function countWords (x) {
var spaceCount = 1;
	for (i = 0; i < x.length; i++) {
		if (x.charAt(i) == " ") {
			spaceCount++
		}
	};
	return spaceCount;
};

function makeAdder (a) {
    var adderOf2function = function (b){
        return b + a
    };
    return adderOf2function;
};

function forEach (x, func) {
	for (i = 0;  i <= x.length; i++) {
		func(i);
	};
};

function map (input, func) {
	var outputArray =[];
	for (i = 1; i <= input.length; i++)
    {outputArray.push(func(i))}
	return outputArray;
};

function filter (vals,arg){
    var result = [];
    for (i = 0; i < vals.length;i++){
        if (arg(vals[i]) === true) {
            result.push(vals[i]);
        }
    }
    return result;
};

function contains(arg, select) {
    //if the arg is already an array, and the value is there, return true, if not, keep going
    for (i = 0; i< arg.length; i++)
    {  if (arg[i] === select) {
            return true;
        }
    }
    //if the arg is an object literal, and the value is there, return true
    for (var value in arg) {
        if (arg.hasOwnProperty(value)) {
            if (arg[value] === select) {return true;}
        }
    }
    //else return false, fail out
    return false;
};

function countWordsInReduce (string) {
    var joinedString = string.concat().join(" ");
    return countWords(joinedString);
}


function reduce (a, b, func) {
    count = null;
    //if the first array value is a number, we're going to add them to the count, if not, going to defer to outside functions aka countwords
    if (!isNaN(a[0])) {
        for (i = 0; i < a.length; i++)
    {   
        {count += a[i];}
    }
    a = count;
    }
    return func(a,b);
}

function sum (arg){
	return reduce(arg, 0, function(){
		return count;
	}
);
}

function every (vals, func) {
    return vals.every(func);
}

function any (vals, func) {
    if (vals[0] === undefined) {return false}
    else if (vals.indexOf(true) !== -1){return true;}
	else if (vals.indexOf(false) !== -1){return false;}
	return vals.some(func);
}

var once = function(func){
var runCount = 0;
	return function(){
		if (runCount > 0) {
			return false;
		}
	runCount = 1;
	return func();
}
};
    

var wrapper = function (hello, func){
	return function(){
		return func(hello)
	};
}