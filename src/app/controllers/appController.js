var app = angular.module('appModule');

app.controller('StoreController', ['$scope', function($scope) {
	
	$scope.category = "Fruits";
	$scope.item = "Apple";
	$scope.selected_category;
	$scope.getCategory = function() {
		return $scope.category;
	}
	$scope.changeCategory = function() {
		$scope.category = "Vegetables";
		$scope.item = "Onion";
	}
	
}]);








	
