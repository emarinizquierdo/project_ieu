'use strict';

/**
 * @ngdoc directive
 * @name projectIeuApp.directive:menu
 * @description
 * # menu
 */
angular.module('projectIeuApp')
    .directive('menu', function() {
        return {
            templateUrl: 'partials/menu.html',
            restrict: 'A',
            controller: ['$scope', 'Data', function($scope, Data) {

                $scope.menuList = Data.menu;

            }]
        };
    });
