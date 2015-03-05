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
    
    $scope.whoInfo = Data.menu[0];

  }]);
