var app = angular.module('appModule');
app.controller('FileUploadController', ['$scope', 'FileSaver', 'Blob', function($scope, FileSaver, Blob) {
	$scope.inputFile = ""; 
	$scope.res = ""; 
	
	$scope.getFile = function(event) {
		console.log("called");
		var reader = new FileReader();
		var files = event.target.files;
		var name = event.target.name;
		console.log(event.target.name);
		
		$scope.inputFile[name] = files[0];
		console.log(files);
		console.log($scope.inputFile);
		reader.readAsBinaryString(files[0]);
		//reader.readAsDataURL(files[0]);
		
		reader.onload = function() {
			$scope.inputFile[name].src = reader.result;
			$scope.$apply();
			console.log("files");
			console.log($scope.inputFile[name]);
		}
	}
	
	// method to parse 7 segment invoice
	
	$scope.getSevenSegment = function (asciiCode) {
		
      var lines = asciiCode.split('\n');
      var getNewVal = "";
	  
      for (var line = 0; line < lines.length; line = line + 2) {
        var arr = [
          [],
          [],
          [],
          [],
          [],
          [],
          [],
          [],
          []
        ]; // Defining 2D array 9 numbers and 7 segments
        var k = 0;
        if (lines[line] == null || lines[line] == undefined)
          continue;
        var a = lines[line].split('');
        for (var i = 1; i < a.length; i++) {
          if (a[i] == '_') {
            arr[k][0] = true;
          }
          i++;
          i++;
          k++;
        }
        if (line < lines.length) {
          line++;
          if (lines[line] == null || lines[line] == undefined)
            continue;
          a = lines[line].split('');
          k = 0;
          for (var i = 0; i < a.length; i++) {
            if (a[i] == '|') {
              arr[k][5] = true;
            }
            i++;
            if (a[i] == '_') {
              arr[k][6] = true;
            }
            i++;
            if (a[i] == '|') {
              arr[k][1] = true;
            }
            k++;
          }
        }
        if (line < lines.length) {
          line++;
          if (lines[line] == null || lines[line] == undefined)
            continue;
          a = lines[line].split('');
          k = 0;
          for (var i = 0; i < a.length; i++) {
            if (a[i] == '|') {
              arr[k][4] = true;
            }
            i++;
            if (a[i] == '_') {
              arr[k][3] = true;
            }
            i++;
            if (a[i] == '|') {
              arr[k][2] = true;
            }
            k++;
          }
        }
        for (var t = 0; t < arr.length; t++) {
          var result = 0;
          for (var u = 0; u < arr[t].length; u++) {
            if (arr[t][u])
              result += Math.pow(2, u);
          }
          var res = map(result) + "";
          getNewVal += res;
          // console.log(res);
        }
        getNewVal += '\n';
      }
      console.log(getNewVal);
      return getNewVal;

    };
	
	// Method that returns number based on weights of the segment.
    var map = function (n) {
      switch (n) {
        case 63:
          return 0;
        case 6:
          return 1;
        case 91:
          return 2;
        case 79:
          return 3;
        case 102:
          return 4;
        case 109:
          return 5;
        case 125:
          return 6;
        case 7:
          return 7;
        case 127:
          return 8;
        case 111:
          return 9;
        default:
          return 0;
      }
    };
	
	$scope.downloadFile = function(text) { 
		var data = new Blob([text], { type: 'text/plain;charset=utf-8' });
		FileSaver.saveAs(data, 'output.txt');
	}
	
	
}]);
