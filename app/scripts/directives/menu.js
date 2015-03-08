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
            controller: ['$scope', '$location', 'Data', 'Lang', function($scope, $location, Data, Lang) {

                $scope.menuList = Data.menu;
                $scope.info = Data.info;
                $scope.currentLang = Lang.current;
                $scope.set = Lang.set;

                $scope.isActive = function( p_item ){
                    var _splitted = $location.$$path.split('/');
                    return (_splitted[1] == p_item.path.substr(1) || $location.$$path == p_item.path );
                }

                $scope.toggleSubmenu = function( p_index ){

                    var _i = 0;
                    for(_i = 0; _i < $scope.menuList.length; _i++){
                        $scope.menuList[_i].clicked = ( _i == p_index );
                    }
                }

            }]
        };
    });
