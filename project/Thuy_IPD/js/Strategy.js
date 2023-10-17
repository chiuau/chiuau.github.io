//Abstract class
var Strategy = function() {
	this.x1 = "";
	this.x2 = "";

	this.turnCount = -1;
	
	if (this.constructor === Strategy) {
		throw new Error("Can't instantiate abstract class!");
    }
};

Strategy.prototype.receive = function(last1,last2) {
	this.x1 = this.x1 + last1.toString();
	this.x2 = this.x2 + last2.toString();
	return this.play(last1,last2);
}

Strategy.prototype.play = function(x1,x2) {
	throw new Error("Abstract method!");
}

Strategy.prototype.newGame = function() {
	this.x1 = "";
	this.x2 = "";
	this.turnCount = -1;
	
}

Strategy.alias = "Abstract Strategy";