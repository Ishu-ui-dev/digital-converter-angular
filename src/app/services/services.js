var app = angular.module('appModule');

app.factory('MainService', [function() {
	
	var _file = {};
	_file.MacroPolo = function(num) {
		if(num % 28 === 0)
			return "MacroPolo";
		else if(num % 7 === 0) 
			return "Polo"
		else if(num % 4 === 0)
			return "Macro"
		else 
			return num
	}	
	return _file;
}]);

