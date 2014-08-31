'use strict';

/* Controllers */
var ecsaControllers = angular.module('ecsaControllers', []);

ecsaControllers.controller('contactController', function($scope, $http) {
    $http({method: 'GET', url: 'json/executives.json', headers: {'Cache-Control': 'private, no-store, max-age=0'}}).
        success(function(data) {
            $scope.executives = data;
    });
});

ecsaControllers.controller('tabController', function($rootScope, $scope, $state, $http) {
    $http({method: 'GET', url: 'json/tabs.json', headers: {'Cache-Control': 'private, no-store, max-age=0'}}).
        success(function(data) {
            $scope.tabs = data;
            $rootScope.$broadcast('$stateChangeSuccess');
    });		
    
    $scope.go = function(route) {
	$state.go(route);
    };

    $scope.active = function(route) {
	return $state.is(route);
    };

    $scope.$on("$stateChangeSuccess", function() {
        $scope.tabs.forEach(function(tab) {
            tab.active = $scope.active(tab.route);
            if(tab.subTabs !== undefined) {
                tab.subTabs.forEach(function(subTab) {
                    subTab.active = $scope.active(subTab.route);
                    if(subTab.active) {
                        tab.active = true;
                   }; 
                });
            }       
	});
    });
    
    
});