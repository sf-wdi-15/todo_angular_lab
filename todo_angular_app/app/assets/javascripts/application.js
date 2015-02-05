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

// Define the angular app module
var TodoApp = angular.module("TodoApp", []);

// Configure to include the X-CSRF-token
TodoApp.config(["$httpProvider", function($httpProvider){
  $httpProvider.defaults.headers.common['X-CSRF-Token'] = $(
    'meta[name=csrf-token]').attr('content')
}]);

TodoApp.controller("TodosCtrl", ['$scope', '$http', function($scope, $http){
  $http.get('/todos.json')
    .success(function (data){
      console.log(data)
      $scope.todos = data;
    });

  $scope.todos = [];
  // Add a function to handle the for submit
  $scope.addTodo = function() {
    todo.complete = false;
    console.log($scope.newTodo);
    $http.post('/todos.json', {todo: $scope.newTodo})
      .success(function (data){
        console.log(data);
        $scope.todos.push(data);
        $scope.newTodo = {};
      });
    };

    $scope.completeTodo = function() {
      todo.complete = true;
      $http.post('/todos.json', {todo: $scope.newTodo})
      .success(function (data){
        console.log(data);
        $scope.todos.push(data);
        $scope.newTodo = {};
      });
    };

  // $scope.updateTodo = function() {
  //   $http.patch('/todos.json', {todo: $scope.updateTodo})
  //     .success(function (data){
  //       $scope.tudos.push(data);
  //       $scope.newTodo = {};
  //     })
  // };
}]);