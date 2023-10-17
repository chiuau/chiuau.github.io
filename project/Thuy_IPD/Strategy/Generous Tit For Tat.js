// JavaScript Document
var GTFT = function() {
	Strategy.apply(this, arguments);
};
GTFT.prototype = Object.create(Strategy.prototype);
GTFT.prototype.constructor = TFT;

GTFT.prototype.play = function(last1,last2) {
	if (last1 == 2) return 1;
	if (last2 == 0) {
		 rad = Math.random();
	 	if (rad < 0.1) return 1;
	}
	return last2;
}

GTFT.prototype.alias = function() {
	return ("Generous Tit For Tat");
} 

// JavaScript Document