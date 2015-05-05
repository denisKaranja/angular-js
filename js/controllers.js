var App = angular.module("myApp", []);

App.controller('AuthorController', ['$scope', '$http', function AuthorController($scope, $http){

		$http.get("js/data.json").success(function(data){
			$scope.persons = data;

			/*pre-initialize the select group*/
			$scope.personsOrder = 'name'; 
		});

}]);