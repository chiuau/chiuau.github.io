// JavaScript Document
var FBF = function() {
	Strategy.apply(this, arguments);
};
FBF.prototype = Object.create(Strategy.prototype);
FBF.prototype.constructor = TFT;

FBF.prototype.play = function(last1,last2) {
	if (last1 == 2) return 1;
	if (last1 == 1 && last2 == 0) return 0;
	return 1;
}

FBF.prototype.alias = function() {
	return ("Firm But Fair");
} 

