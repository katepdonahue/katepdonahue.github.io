'use strict';

var portfolioApp = angular.module('portfolioApp', [
  'ngRoute'
  ]);

portfolioApp.config([
  '$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/', {
      templateUrl: 'app/partials/home.html'
    }).
    when('/about', {
      templateUrl: 'app/partials/about.html'
    }).
    when('/portfolio', {
      templateUrl: 'app/partials/portfolio.html'
    }).
    otherwise({redirectTo: '/'});
  }]);
