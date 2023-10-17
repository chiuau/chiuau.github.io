// JavaScript Document
var RTFT = function() {
	Strategy.apply(this, arguments);
};
RTFT.prototype = Object.create(Strategy.prototype);
RTFT.prototype.constructor = RTFT;

RTFT.prototype.play = function(last1,last2) {
	if (last1 == 2) return 0;
	return (1 - last2);
}

RTFT.prototype.alias = function() {
	return ("Reverse Tit For Tat");
} 

// JavaScript Document