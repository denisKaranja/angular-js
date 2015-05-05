/*
All controllers for the App
@ __author = Denis Karanja
*/
var personsController = angular.module("personsController", []);

/*
List controller
	To give a list of all persons in the app
*/
personsController.controller('ListController', ['$scope', '$http', function AuthorController($scope, $http){
		$http.get("js/data.json").success(function(data){
			$scope.persons = data;

			/*pre-initialize the select group*/
			$scope.personsOrder = 'name'; 
		});
}]);

/*
Details controller
	To give a detailed view of the people
*/
personsController.controller('DetailsController', ['$scope', '$http', '$routeParams', function AuthorController($scope, $http, $routeParams){
		$http.get("js/data.json").success(function(data){
			$scope.persons = data;

			/*get which item*/
			$scope.whichItem = $routeParams.itemId; 
		});
}]);