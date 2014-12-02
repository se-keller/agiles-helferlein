function calculateVelocityRange() {

	var velocities = [  parseInt(document.getElementById("velocity-1").value),
						parseInt(document.getElementById("velocity-2").value),
						parseInt(document.getElementById("velocity-3").value),
						parseInt(document.getElementById("velocity-4").value),
						parseInt(document.getElementById("velocity-5").value),
						parseInt(document.getElementById("velocity-6").value),
						parseInt(document.getElementById("velocity-7").value),
						parseInt(document.getElementById("velocity-8").value)]
	var range = velocityRange(velocities);
	document.getElementById("velocity-label").innerHTML = "Mit einer 90% Wahrscheinlichkeit liegt die Velocity des nächsten Sprints zwischen <b>"+range[0]+"</b> und <b>"+range[1]+"</b>.";
}