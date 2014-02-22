'use strict';

var portfolioApp = angular.module('portfolioApp', [
  'ngRoute'
  ]);

portfolioApp.config([
  '$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/', {
      templateUrl: 'partials/home.html'
    }).
    when('/about', {
      templateUrl: 'partials/about.html'
    }).
    when('/portfolio', {
      templateUrl: 'partials/portfolio.html'
    }).
    otherwise({redirectTo: '/'});
  }]);
