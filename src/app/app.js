var app = angular.module('appModule', ['ngFileSaver']);

app.controller('AppController', ['$scope', 'MacropoloService', function($scope, MacropoloService) { 
	
	//$scope.test = "good morning";
	$scope.output = "";
	$scope.changeValue = function() {
		for(var i = 1; i<=100; i++) {
			$scope.output += " ";
			$scope.output += MacropoloService.generateValue(i)	
		}
	}();
	
}])
