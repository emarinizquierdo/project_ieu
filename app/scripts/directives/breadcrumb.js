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
            replace: true,
            controller: ['$scope', '$location', 'Data', function($scope, $location, Data) {

                $scope.menuList = Data.menu;
                $scope.path = $location.$$path;


            }]
        };
    });
