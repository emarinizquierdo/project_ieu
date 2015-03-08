'use strict';

/**
 * @ngdoc function
 * @name projectIeuApp.controller:HeaderCtrl
 * @description
 * # HeaderCtrl
 * Controller of the projectIeuApp
 */
angular.module('projectIeuApp')
  .controller('HeaderCtrl', function ($scope) {
    	
    	$scope.activeMenu = false;

    	$scope.toggleMenu = function(){
    		$scope.activeMenu = !$scope.activeMenu;
    	}
  });
