function velocityRange(velocityArray) {
	velocityArray = velocityArray.filter(isNumber);
	if(velocityArray.length == 0) {
		return [0,0];
	}
	velocityArray.sort();
	if(velocityArray.length > 2) {
		removeFirstAndLastElement(velocityArray);
	}
	return [velocityArray[0], velocityArray[velocityArray.length-1]];
}

function isNumber(element) {
	return !isNaN(element) && !undefined;
}

function removeFirstAndLastElement(array) {
	array.shift();
	array.pop();
}