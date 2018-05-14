var app = angular.module('appModule');

app.directive('inputFileModel', ['$parse', function($parse) {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			var model =  $parse(attrs.inputFileModel);
			console.log("model");
			console.log(model);

			var modelSetter = model.assign; // define a setter for inputFileModel
			console.log("modelSetter");
			console.log(modelSetter);

			//bind change event on an event
			element.bind('change', function() {
				scope.$apply( function() {
					// set the model value
					modelSetter(scope, element[0].files[0]);
				})
			})
			
		}
	}  
	
}])



app.directive('customOnChange', [function() {
	return {
		restrict: 'A',
		link: function(scope, element, attrs) {
			var onChangeHandler = scope.$eval(attrs.customOnChange);
			element.on('change', onChangeHandler);
			element.on('$destroy', function() {
				element.off();
			})
		}
	}
}])

app.directive('newCollection', function() {
	return {
		restrict: 'E',
		scope: {
			category: "@",
			item: "=",
			selected: "&"
		},
		template: "<div class='panel panel-primary'>" + 
					  "<div class='panel-heading'>Store1</div>" +
					  "<div class='panel-body'>" +
					  "<h5 style = 'display: inline-block; width: 60px;'>Category:</h5>  <input type = 'text' name = 'category' ng-model = 'category' /><br/>"  +
					  "<h5 style = 'display: inline-block; width: 60px;'>Item:</h5>  <input type = 'text' name = 'item' ng-model = 'item' /><br />"+
					  "<button type = 'button' class = 'btn btn-primary' ng-click = 'selected()'> Change Category" + 
					  "</button></div></div>" 
					  
		}
})