// JavaScript Document
var ZDExtortion2 = function() {
	Strategy.apply(this, arguments);
};
ZDExtortion2.prototype = Object.create(Strategy.prototype);
ZDExtortion2.prototype.constructor = ZDExtortion2;

ZDExtortion2.prototype.play = function(last1,last2) {
	if (last1 == 2) return 1;
	if (last1 == 1 && last2 == 1) {
		var rad = Math.random();
		if (rad < (7/9)) return 1; else return 0;
	}
	
	if (last1 == 0 && last2 == 1) {
		var rad = Math.random();
		if (rad < (2/3)) return 1; else return 0;
	}
	
	return 0;
}

ZDExtortion2.prototype.alias = function() {
	return ("ZD-Extortion-2");
} 

