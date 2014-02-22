'use strict';

var portfolioControllers = angular.module('portfolioControllers', []);

portfolioControllers.controller('HomeCtrl', [
  '$scope',
  '$http',
  function($scope, $http) {
    $http.get('/api/books.json').success(function(data) {
      $scope.books = data;
  });
  }]);