'use strict';

/* App Module */

var ecsaApp = angular.module('ecsaApp', [
  'ui.router',
  'ecsaControllers',
  'ui.bootstrap'
]);

ecsaApp.config(
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
  
    $stateProvider
      .state("main", { abstract: true, url:"", templateUrl:"partials/main.html" })
      .state("main.home", { url:"/home", templateUrl:"partials/home.html"})
      .state("main.about", { url:"/about", templateUrl:"partials/about/about.html"})
      .state("main.aboutEcsa", { url:"/aboutEcsa", templateUrl:"partials/about/ecsa.html"})
      .state("main.aboutHouse", { url:"/aboutHouse", templateUrl:"partials/about/house.html"})
      .state("main.aboutVolunteers", { url:"/aboutVolunteers", templateUrl:"partials/about/volunteers.html"})
      .state("main.aboutFaq", { url:"/aboutFaq", templateUrl:"partials/about/faq.html"})
      .state("main.rentals", { url:"/rentals", templateUrl:"partials/rentals/rentals.html"})
      .state("main.rentalItems", { url:"/rentalItems", templateUrl:"partials/rentals/items.html"})
      .state("main.rentalHouse", { url:"/rentalHouse", templateUrl:"partials/rentals/rentHouse.html"})
      .state("main.events", { url:"/events", templateUrl:"partials/events.html"})
      .state("main.contact", { url:"/contact", templateUrl:"partials/contact/contact.html"})
      .state("main.socialMedia", { url:"/socialMedia", templateUrl:"partials/contact/socialMedia.html"})
      .state("main.comments", { url:"/comments", templateUrl:"partials/contact/comments.html"})
      .state("main.links", { url:"/links", templateUrl:"partials/contact/links.html"});
  });