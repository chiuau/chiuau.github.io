 //Abstract class
var Strategy = function() {
	this.x1 = "";
	this.x2 = "";
	this.delayCount = -1;
	this.turnCount = -1;
	
	this.probCC = 1.0;
	this.probDC = 1.0;
	this.probCD = 0.0;
	this.probDD = 0.0;
	this.K = 0.7;
	
	if (this.constructor === Strategy) {
		throw new Error("Can't instantiate abstract class!");
    }
};

//Opponent Modeling
Strategy.prototype.receive1 = function(last1,last2) {
	
	this.turnCount++;
	if (last2 == 2) this.delayCount++;
	else {
		this.updateOppModel(last2);	
		this.x2 = this.x2 + last2.toString();
	}	
	
	return this.generateDelay(last1,last2);
}

//Copying Strategy
Strategy.prototype.receive = function(last1,last2) {
	this.x1 = this.x1 + last1.toString();
	this.x2 = this.x2 + last2.toString();
	return this.play(last1,last2);
}

//Mixed Strategy 


Strategy.prototype.play = function(x1,x2) {
	throw new Error("Abstract method!");
}

Strategy.prototype.newGame = function() {
	this.x1 = "";
	this.x2 = "";
	this.delayCount = -1;
	this.turnCount = -1;
	
	this.probCC = 1.0;
	this.probDC = 1.0;
	this.probCD = 1.0;
	this.probDD = 1.0;
}

Strategy.alias = "Abstract Strategy";

Strategy.prototype.updateOppModel = function(last2) {
	var prev1 = this.x1[this.x2.length-1];
	var prev2 = this.x2[this.x2.length-1];
	//console.log(this.x1.length + " " + this.alias() + ": " + this.probCC + " " + this.probDC + " " + this.probCD +  " " + this.probDD);
	//console.log(prev1 + " " + prev2 + " " + last2);
	switch (prev2 + "|" + prev1) {
		case "1|1": this.probCC = (1 - this.K) * this.probCC + this.K * last2; break;
		case "0|1": this.probDC = (1 - this.K) * this.probDC + this.K * last2; break;
		case "1|0": this.probCD = (1 - this.K) * this.probCD + this.K * last2; break;	
		case "0|0": this.probDD = (1 - this.K) * this.probDD + this.K * last2; break;
	}
}

Strategy.prototype.generateDelay1 = function(last1,last2) {
	var p, i;
	var prev1 = last1;
	var prev2 = last2;
	
	for (i=0;i<this.delayCount;i++) {
		prev1 = this.x1[this.x2.length];
		switch (prev2 + "|" + prev1) {
			case "1|1": p = this.probCC; break;
			case "0|1": p = this.probDC; break;
			case "1|0": p = this.probCD; break;	
			case "0|0": p = this.probDD; break;
			default: p = 1;
		}
		//console.log(p);
		var rand = Math.random(); 
		prev2 = ((rand < p) ? 1 : 0);
		this.x2 = this.x2 + prev2.toString();
		
	}
	
	var res = this.play(prev1,prev2);
	this.x1 = this.x1 + res.toString();
	
	if (this.delayCount > 0) this.x2 = this.x2.slice(0,(-this.delayCount));
	
	return res;
	
}

Strategy.prototype.generateDelay = function(last1,last2) {
	if (this.turnCount <= 2 * this.delayCount) {	
		res = this.play(last1,last2);
		this.x1 = this.x1 + res.toString();
		return res;
	}
	
	else {
		var p, i;
		var prev1 = last1;
		var prev2 = last2;
	
		for (i=0;i<this.delayCount;i++) {
			prev1 = this.x1[this.x2.length];

			switch (prev2 + "|" + prev1) {
				case "1|1": p = this.probCC; break;
				case "0|1": p = this.probDC; break;
				case "1|0": p = this.probCD; break;	
				case "0|0": p = this.probDD; break;
				default: p = 1;
			}
			var rand = Math.random(); 
			prev2 = ((rand < p) ? 1 : 0);
			this.x2 = this.x2 + prev2.toString();	
		}
		
		
		var res = this.play(prev1,prev2);
		//if (res == 1) console.log(this.x1 + " " + this.x2 + " " + prev1 + " " + prev2);
		this.x1 = this.x1 + res.toString();
	
		if (this.delayCount > 0) this.x2 = this.x2.slice(0,(-this.delayCount));
		return res;
	}
}