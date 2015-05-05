var searchApp = angular.module("searchApp", [
	"ngRoute",
	"personsController"
	]);

searchApp.config(["$routeProvider", function($routeProvider){
	$routeProvider.
	when('/list', {
		templateUrl: 'templates/list.html',
		controller: 'ListController'
	}).
	otherwise({
		redirectTo: '/list'
	});
}]);