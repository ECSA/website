'use strict';

/* App Module */

var ecsaApp = angular.module('ecsaApp', [
  'ui.router',
  'ecsaControllers',
  'ui.bootstrap'
]);

ecsaApp.config(
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/main/home");
  
    $stateProvider
      .state("main", { abstract: true, url:"", templateUrl:"partials/main.html" })
      .state("main.home", { url:"/home", templateUrl:"partials/home.html"})
      .state("main.about", { url:"/about", templateUrl:"partials/about.html"})
      .state("main.rentals", { url:"/rentals", templateUrl:"partials/rentals.html"})
      .state("main.events", { url:"/events", templateUrl:"partials/events.html"})
      .state("main.faq", { url:"/faq", templateUrl:"partials/faq.html"})
      .state("main.contact", { url:"/contact", templateUrl:"partials/contact.html"});
  });