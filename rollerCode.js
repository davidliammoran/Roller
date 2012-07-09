//basic roll of a single die
var rollDie = function(d) {
	return Math.floor(Math.random()*d)+1;
}

//roll of a number of dice in the format 3d6+2, e.g.
var complexRoll = function(numDice,d,mod) {
	var total = 0;
	var numDice = numDice;
	for (var i = numDice; i > 0; i--) {
		var roll = rollDie(d);
		if (roll === d) {
			i++;
		}
		total += roll;
	}
	return total+mod;
}

alert(complexRoll(3,6,2));