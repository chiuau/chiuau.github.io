// JavaScript Document
var TFTT = function() {
	Strategy.apply(this, arguments);
};
TFTT.prototype = Object.create(Strategy.prototype);
TFTT.prototype.constructor = TFTT;

TFTT.prototype.play = function(last1,last2) {
	if (this.x2.length < 2) return 1;
	if ((last2 == 0) && (this.x2[this.x2.length-2] == 0)) return 0; 
	return 1;
}

TFTT.prototype.alias = function() {
	return ("Tit For Two Tat");
} 