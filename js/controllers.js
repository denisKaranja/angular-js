/*
All controllers for the App
@ __author = Denis Karanja
*/
var personsController = angular.module("personsController", []);

personsController.controller('ListController', ['$scope', '$http', function AuthorController($scope, $http){

		$http.get("js/data.json").success(function(data){
			$scope.persons = data;

			/*pre-initialize the select group*/
			$scope.personsOrder = 'name'; 
		});

}]);