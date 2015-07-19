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

// Let's define our Angular App Module
var TodoApp = angular.module("TodoApp", []);

// configured the http module to include
// the X-CSRF-Token
TodoApp.config(["$httpProvider", function($httpProvider){
  $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
}]);


TodoApp.controller("TodosCtrl", ["$scope", "$http", function ($scope, $http) {
  $scope.greeting = "Add a Todo Item";


  $http.get("/todos.json")
    .success(function (data) {
      console.log(data);
      $scope.todos = data;
    });

  $scope.todos = [];
  // handle form submit
  $scope.addTodo = function () {
    console.log($scope.newTodo);

    $http.post("/todos.json", {todo: $scope.newTodo})
      .success(function (data) {
        console.log(data);
        $scope.todos.push(data);
        $scope.newTodo = {};
      });
  };
}])