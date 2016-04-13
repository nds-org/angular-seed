'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', [ '$scope', function($scope) {
	
	$scope.$on('terminal-input', function (e, consoleInput) {
        var cmd = consoleInput[0];
        console.log("Sending cmd: " + cmd);
	});

	$scope.send = function() {
		$scope.$broadcast('terminal-output', {
		    output: true,
		    text: ['Welcome to vtortola.GitHub.io',
		           'This is an example of ng-terminal-emulator.',
		           '',
		           "Please type 'help' to open a list of commands"],
		    breakLine: true
		});
	};

}]);