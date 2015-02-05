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
  $scope.greeting = "Hello world";
  $scope.todos = [];

  $http.get('/todos.json')
       .success( function(data) {
        console.log(data);
        $scope.todos = data;
       })
       ;
}])