function calculateNps(promoter, indifferent, detractor) {
	promoter = safeNaN(promoter);
	indifferent = safeNaN(indifferent);
	detractor = safeNaN(detractor);
    var sum = promoter + indifferent + detractor;
    var nps = 0;
    if(sum != 0) { 
        nps = Math.round(100*((promoter - detractor) / sum));
    }
    return nps;
}

function safeNaN(value) {
	if(isNaN(value))
		return 0;
	return value;
}