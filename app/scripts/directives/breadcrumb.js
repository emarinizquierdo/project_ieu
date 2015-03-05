'use strict';

/**
 * @ngdoc directive
 * @name projectIeuApp.directive:menu
 * @description
 * # menu
 */
angular.module('projectIeuApp')
    .directive('breadcrumb', function() {
        return {
            templateUrl: 'partials/breadcrumb.html',
            restrict: 'A',
            controller: ['$scope', 'Data', function($scope, Data) {

                $scope.menuList = Data.menu;

            }]
        };
    });
