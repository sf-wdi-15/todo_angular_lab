// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

// Define angular app
var ToDoApp = angular.module("ToDoApp", []);

ToDoApp.config(["$httpProvider", function($httpProvider) {
	$httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content')
}]);

ToDoApp.controller("ToDoCtrl", ["$scope", "$http", function ($scope, $http) {
	$scope.greeting = "Hey There, Welcome to my To Do List";

	$http.get("/todos.json")
		.success(function (data) {
			console.log(data);
			$scope.todos = data;
		});

	$scope.todos = [];

	$scope.addTodo = function () {
		console.log($scope.newTodo);

		$http.post("/todos.json", {todo: $scope.newTodo})
			.success(function (data) {
				console.log(data);
				$scope.todos.push(data);
				$scope.newTodo = {};
			});
	
	};

	$scope.updateTodo = function () {
		console.log("updating", this.todo);
		console.log($http)

		// use patch to update -- set route todos + todo.id + json
		$http.patch("/todos/" + this.todo.id + ".json", {todo: this.todo})
			.success(function (data) {
				console.log("Your todo has been  updated");
			});
	};

  $scope.remainingTodos = function() {
      var count = 0;
      angular.forEach($scope.todos, function(todo) {
        count += todo.complete ? 0 : 1;
      });
      return count;
    };

}])
