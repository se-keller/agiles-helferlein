function nps() {
	var promoter = parseInt(document.getElementById("promoter-input").value);
	var indifferent = parseInt(document.getElementById("indifferent-input").value);
	var detractor = parseInt(document.getElementById("detractor-input").value);
    var nps = calculateNps(promoter, indifferent, detractor);
	document.getElementById("nps-label").innerHTML = "NPS = " + nps + " %";
}