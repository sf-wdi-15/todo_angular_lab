//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

var TodoApp = angular.module("TodoApp", []);

// config the HTTP module to include 
// the X-CSRF_Token
// X means its a custom header. Not a Standard header
TodoApp.config(["$httpProvider", function($httpProvider){
  $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content')
}]);

TodoApp.controller("TodoCtrl", ["$scope", "$http", function($scope, $http){

  $scope.todos = [];

  // GET all Todos
  $http.get('/todos.json')
       .success( function(data) {
        // console.log(data);
        $scope.todos = data;
       });

  // handle addTodo() on form submission
  $scope.addTodo = function(){
    $http.post("/todos.json", {todo: $scope.newTodo})
         .success(function(data){
          // console.log(data);
          $scope.todos.push(data);
          // clear form
          $scope.newTodo = {};
         })
         ;
  };
}])