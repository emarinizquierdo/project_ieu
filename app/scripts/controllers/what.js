'use strict';

/**
 * @ngdoc function
 * @name projectIeuApp.controller:WhatCtrl
 * @description
 * # WhatCtrl
 * Controller of the projectIeuApp
 */
angular.module('projectIeuApp')
  .controller('WhatCtrl', ['$scope', 'Data', function ($scope, Data) {
    
    $scope.data = Data.menu[1];

  }]);