'use strict';

/**
 * @ngdoc function
 * @name projectIeuApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the projectIeuApp
 */
angular.module('projectIeuApp')
  .controller('AboutCtrl', ['$scope', 'Data', function ($scope, Data) {
    
    $scope.data = Data.menu[0];

  }]);
