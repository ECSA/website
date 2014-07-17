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
                
                $scope.executives = [{
                        position: 'President',
                        firstName: 'Dylan',
                        lastName: 'Stankievech',
                        email: 'presidentofecsa@gmail.com'    
                }, {
                        position: 'VP Communication',
                        firstName: 'Cody',
                        lastName: 'Flatla',
                        email: 'ecsacommunication@gmail.com'
                }, {
                        position: 'VP Finance',
                        firstName: 'Aoran',
                        lastName: 'Liu',
                        email: 'ecsafinance@gmail.com'
                }, {
                        position: 'VP House',
                        firstName: 'Eric',
                        lastName: 'Webb',
                        email: 'ecsahouse@gmail.com'
                }];

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
