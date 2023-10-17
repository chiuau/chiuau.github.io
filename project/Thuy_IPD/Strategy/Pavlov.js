// JavaScript Document
var Pavlov = function() {
	Strategy.apply(this, arguments);
};
Pavlov.prototype = Object.create(Strategy.prototype);
Pavlov.prototype.constructor = Pavlov;

Pavlov.prototype.play = function(last1,last2) {
	if (last2 == 2) return 1;
	if (last1 == last2) return 1; 
	return 0;
}

Pavlov.prototype.alias = function() {
	return ("Pavlov");
} 
