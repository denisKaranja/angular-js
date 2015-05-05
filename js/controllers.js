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
			/*data from file*/
			$scope.persons = data;

			/*get which item*/
			$scope.whichItem = $routeParams.itemId; 

			/*NAVIGATION BUTTONS*/
				/*previous nav btn*/
			$scope.prevItem = ($routeParams.itemId > 0) ? Number($routeParams.itemId) - 1: $scope.persons.length - 1;

				/*next nav btn*/
			 $scope.nextItem = ($routeParams.itemId < ($scope.persons.length - 1)) ? Number($routeParams.itemId) + 1: 0;


		});
}]);