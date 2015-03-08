'use strict';

/**
 * @ngdoc function
 * @name projectIeuApp.controller:WhoCtrl
 * @description
 * # WhoCtrl
 * Controller of the projectIeuApp
 */
angular.module('projectIeuApp')
    .controller('MainCtrl', ['$scope', '$routeParams', 'Data', function($scope, $routeParams, Data) {

        $scope.data = Data.getData($routeParams);        

        $scope.$on("$routeChangeSuccess", function(scope, next, current) {
            $scope.transitionState = "active"
        });

    }]);
