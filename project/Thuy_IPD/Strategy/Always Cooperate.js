// JavaScript Document
var AllC = function() {
	Strategy.apply(this, arguments);
};
AllC.prototype = Object.create(Strategy.prototype);
AllC.prototype.constructor = AllC;

AllC.prototype.play = function(x1,x2) {
	 return 1;
}

AllC.prototype.alias = function() {
	return ("Always Cooperate");
} 