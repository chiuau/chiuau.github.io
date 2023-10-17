 // JavaScript Document
var Grim = function() {
	Strategy.apply(this, arguments);
	this.notDefected = 1;
};
Grim.prototype = Object.create(Strategy.prototype);
Grim.prototype.constructor = Grim;

Grim.prototype.play = function(last1,last2) {
	if (last1==1 && last2==0) 
		this.notDefected = 0;
	return this.notDefected;
}

Grim.prototype.newGame = function() {
		this.x1 = "";
		this.x2 = "";
		this.delayCount = -1;
	
		this.probCC = 1.0;
		this.probDC = 1.0;
		this.probCD = 0.0;
		this.probDD = 0.0;
		this.notDefected = 1;
}

Grim.prototype.alias = function() {
	return ("Grim/Spite");
} 

