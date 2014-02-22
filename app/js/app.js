'use strict';

var portfolioApp = angular.module('portfolioApp', [
  'ngRoute',
  'portfolioControllers'
  ]);

portfolioApp.config([
  '$routeProvider',
  function($routeProvider) {
    $routeProvider.
    when('/', {
      templateUrl: 'app/partials/home.html',
      controller: 'HomeCtrl'
    }).
    when('/about', {
      templateUrl: 'app/partials/about.html',
      controller: 'AboutCtrl'
    }).
    when('/portfolio', {
      templateUrl: 'app/partials/portfolio.html',
      controller: 'MyPortfolioCtrl'
    }).
    otherwise({redirectTo: '/'});
  }]);
