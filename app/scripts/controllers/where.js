'use strict';

/**
 * @ngdoc function
 * @name projectIeuApp.controller:WhereCtrl
 * @description
 * # WhereCtrl
 * Controller of the projectIeuApp
 */
angular.module('projectIeuApp')
  .controller('WhereCtrl', ['$scope', 'Data', function ($scope, Data) {
    
    $scope.data = Data.menu[3];

  }]);