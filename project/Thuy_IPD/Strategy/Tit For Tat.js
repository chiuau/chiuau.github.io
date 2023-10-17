// JavaScript Document
var TFT = function() {
	Strategy.apply(this, arguments);
};
TFT.prototype = Object.create(Strategy.prototype);
TFT.prototype.constructor = TFT;

TFT.prototype.play = function(last1,last2) {
	if (last1 == 2) return 1;
	return last2;
}



TFT.prototype.alias = function() {
	return ("Tit For Tat");
} 

