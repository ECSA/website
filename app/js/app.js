'use strict';

/* App Module */

var ecsaApp = angular.module('ecsaApp', [
  'ngRoute',
  'ecsaControllers'
]);

ecsaApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/home.html',
        controller: 'tabController'
      }).
      otherwise({
        redirectTo: '/home'
      });
  }]);
