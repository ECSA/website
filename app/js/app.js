'use strict';

/* App Module */

var ecsaApp = angular.module('ecsaApp', [
  'ui.router',
  'ecsaControllers',
  'ecsaDirectives',
  'ui.bootstrap'
]);

ecsaApp.config(
  function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/home");
  
    $stateProvider
      .state("main", { abstract: true, url:"", templateUrl:"partials/main.html" })
      .state("main.home", { url:"/home", templateUrl:"partials/home.html"})
      .state("main.about", { url:"/about", templateUrl:"partials/about/about.html"})
      .state("main.faq", { url:"/faq", templateUrl:"partials/about/faq.html"})
      .state("main.house", { url:"/house", templateUrl:"partials/house/house.html"})
      .state("main.door_code", { url:"/door_code", templateUrl:"partials/house/door_code.html"})
      .state("main.book_house", { url:"/book_house", templateUrl:"partials/house/book_house.html"})
      .state("main.volunteers", { url:"/volunteers", templateUrl:"partials/volunteer/volunteers.html"})
      .state("main.volunteer_calendar", { url:"/volunteer_calendar", templateUrl:"partials/volunteer/volunteer_calendar.html"})
      .state("main.volunteer_application", { url:"/volunteer_application", templateUrl:"partials/volunteer/volunteer_application.html"})
      .state("main.services", { url:"/services", templateUrl:"partials/services.html"})
      .state("main.events", { url:"/events", templateUrl:"partials/events.html"})
      .state("main.contact", { url:"/contact", templateUrl:"partials/contact/contact.html"})
      .state("main.social_media", { url:"/social_media", templateUrl:"partials/contact/social_media.html"})
      .state("main.comments", { url:"/comments", templateUrl:"partials/contact/comments.html"})
      .state("main.links", { url:"/links", templateUrl:"partials/contact/links.html"});
  });