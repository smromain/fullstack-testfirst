function setSomePropertiesOn(object){
	object.x = 7;
	object['y'] = 8;
	object.onePlus = function(number){
	newNumber = number + 1;
	return newNumber;
	};
}

