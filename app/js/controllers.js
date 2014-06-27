'use strict';

/* Controllers */
var ecsaControllers = angular.module('ecsaControllers', []);

ecsaControllers.controller('tabController', function($rootScope, $scope, $state) {
		$scope.go = function(route) {
			$state.go(route);
		}

		$scope.active = function(route) {
			return $state.is(route);
		}

		$scope.tabs = [{
			heading: 'Home',
			route: 'main.home',
			active: false
		}, {
			heading: 'About',
			route: 'main.about',
			active: false
		}, {
			heading: 'Rentals',
			route: 'main.rentals',
			active: false
		}, {
			heading: 'Events',
			route: 'main.events',
			active: false
		}, {
			heading: 'FAQ',
			route: 'main.faq',
			active: false
		}, {
 			heading: 'Contact Us',
			route: 'main.contact',
			active: false
		}];

		$scope.$on("$stateChangeSuccess", function() {
			$scope.tabs.forEach(function(tab) {
				tab.active = $scope.active(tab.route);
			});
		});
	}
);
