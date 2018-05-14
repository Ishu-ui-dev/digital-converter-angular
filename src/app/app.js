var app = angular.module('appModule', []);

app.controller('AppController', ['$scope', function($scope) { 
	
	//$scope.test = "good morning";
	$scope.output = "";
	
	$scope.changeValue = function() {
		for(var i = 1; i<=100; i++) {
			$scope.output += " ";
			if ((i % 4 === 0) && (i % 7 === 0)) {
				$scope.output += "macropolo";
				}
				else if (i % 4 === 0) {
					$scope.output += "macro";
				}
				else if (i % 7 === 0) {
					$scope.output += "polo";
				}
				else {
					$scope.output += i + " ";
				}
		}
	}();
	
}])
