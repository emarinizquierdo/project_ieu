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
            replace: true,
            controller: ['$scope', 'Data', 'Lang', function($scope, Data, Lang) {

                $scope.menuList = Data.menu;
                $scope.info = Data.info;
                $scope.currentLang = Lang.current;
                $scope.set = Lang.set;

            }]
        };
    });
