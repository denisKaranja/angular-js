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
	when('/details/:itemId', {
		templateUrl: 'templates/details.hmtl',
		controller:  'DetailsController'
	}).
	otherwise({
		redirectTo: '/list'
	});
}]);