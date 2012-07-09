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

//figure out an average roll given x rolls
var avgRoll = function(rolls,numDice,d,mod) {
	var total = 0;
	for (var i = rolls; i > 0; i--) {
		total += complexRoll(numDice,d,mod);
	}
	return total / rolls;
}

alert(avgRoll(100000,3,6,0));