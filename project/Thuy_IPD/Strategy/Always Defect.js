// JavaScript Document
var AllD = function() {
	Strategy.apply(this, arguments);
};
AllD.prototype = Object.create(Strategy.prototype);
AllD.prototype.constructor = AllD;

AllD.prototype.play = function(last1,last2) {
	 return 0;
}

AllD.prototype.alias = function() {
	return ("Always Defect");
} 