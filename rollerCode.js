function MyRoll() {
	this.highRoll = 0;
	this.rollNumbers = [];
	this.modifier = 0;

	//basic roll of a single die
	this.rollDie = function(d) {
		return Math.floor(Math.random()*d)+1;
	}

	//roll of a number of dice in the format 3d6+2, e.g.
	this.complexRoll = function(numDice,d,mod) {
		var total = 0;
		this.modifier = mod;
		var numDice = numDice;
		for (var i = numDice; i > 0; i--) {
			var roll = this.rollDie(d);
			if (roll === d) {
				i++;
			}
			this.rollNumbers.push(roll);
			total += roll;
		}
		if (total+mod < this.highRoll) { //this is not working correctly
			this.rollNumbers = [];		//and just returns an empty array if the 
		}								//subsequent rolls are higher
		return total+mod;
	}

	//figure out an average roll given x rolls
	this.avgRoll = function(rolls,numDice,d,mod) {
		var total = 0;
		for (var i = rolls; i > 0; i--) {
			var thisRoll = this.complexRoll(numDice,d,mod);
			if (thisRoll > this.highRoll) {
				this.highRoll = thisRoll;
			}
			total += thisRoll;
		}
		return total / rolls;
	}
}

var roller = new MyRoll();
roller.avgRoll(2,3,6,0);
alert(roller.rollNumbers);