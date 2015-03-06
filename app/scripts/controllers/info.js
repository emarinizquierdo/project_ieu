'use strict';

/**
 * @ngdoc function
 * @name projectIeuApp.controller:InfoCtrl
 * @description
 * # InfoCtrl
 * Controller of the projectIeuApp
 */
angular.module('projectIeuApp')
  .controller('InfoCtrl', ['$scope', 'Data', function ($scope, Data) {
    
    $scope.data = Data.menu[4];

  }]);
