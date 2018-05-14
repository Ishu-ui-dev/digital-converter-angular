var app = angular.module('appModule');

app.factory('fileUploadService', ['$http', '$q', function($http, $q) {
	var _file = {};
	
	var deferred = $q.defer();
	_file.uploadFileToUrl = function(file) {  
		$http({
				method: 'POST',
				url: 'input_user_story_1.txt',
				headers: {
					'Content-Type' : 'application/json',
				},
				data: {
					"name": file
				}
		})
		.then(function(response) {
			deferred.resolve(response);
		})
		.catch(function(error) {
			deferred.reject(response);
		});
		return deferred.promise;
	}
	
	return _file;
	
	
	
	
}]);

