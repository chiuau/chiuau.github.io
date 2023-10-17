// JavaScript Document
var ZDGTFT2 = function() {
	Strategy.apply(this, arguments);
};

ZDGTFT2.prototype = Object.create(Strategy.prototype);
ZDGTFT2.prototype.constructor = ZDGTFT2;

ZDGTFT2.prototype.play = function(last1,last2) {
	if (last1 == 2) return 1;
	if (last1 == 0 && last2 == 0) {
		var rad = Math.random();
		if (rad < (1/4)) return 1; else return 0;
	}
	
	if (last1 == 1 && last2 == 0) {
		var rad = Math.random();
		if (rad < (1/8)) return 1; else return 0;
	}
	
	return 1;
}

ZDGTFT2.prototype.alias = function() {
	return ("ZD-GTFT-2");
} 

// JavaScript Document