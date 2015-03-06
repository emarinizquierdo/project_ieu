'use strict';

/**
 * @ngdoc function
 * @name projectIeuApp.controller:WhoCtrl
 * @description
 * # WhoCtrl
 * Controller of the projectIeuApp
 */
angular.module('projectIeuApp')
  .controller('WhoCtrl', ['$scope', 'Data', function ($scope, Data) {
    
    $scope.data = Data.menu[0];

$scope.$on("$routeChangeSuccess", function (scope, next, current) {
        $scope.transitionState = "active"
    });

  }]);
