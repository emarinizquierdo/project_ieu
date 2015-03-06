'use strict';

/**
 * @ngdoc function
 * @name projectIeuApp.controller:HowCtrl
 * @description
 * # HowCtrl
 * Controller of the projectIeuApp
 */
angular.module('projectIeuApp')
  .controller('HowCtrl', ['$scope', 'Data', function ($scope, Data) {
    
    $scope.data = Data.menu[2];

  }]);