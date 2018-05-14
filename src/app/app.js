var app = angular.module('appModule', []);

app.controller('AppController', ['$scope', 'MainService', function($scope, MainService) { 
	
	//$scope.test = "good morning";
	$scope.output = "";
	$scope.changeValue = function() {
		for(var i = 1; i<=100; i++) {
			$scope.output += " ";
			$scope.output += MainService.MacroPolo(i)	
		}
	}();
	
}])
