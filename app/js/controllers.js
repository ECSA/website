'use strict';

/* Controllers */
var ecsaControllers = angular.module('ecsaControllers', []);

ecsaControllers.controller('tabController', ['$scope',
	function($scope) {
		$scope.tabs = [{
			title: 'Home'
		}, {
			title: 'About'
		}, {
			title: 'Events'
		}];

		$scope.activeTab = null;

		$scope.onClickTab = function(tab) {
			$scope.activeTab = tab;
		};

		$scope.isActiveTab = function(tab) {
			return tab == $scope.activeTab;
		};
	}]);