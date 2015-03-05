'use strict';

/**
 * @ngdoc service
 * @name projectIeuApp.Data
 * @description
 * # Data
 * Factory in the projectIeuApp.
 */
angular.module('projectIeuApp')
    .factory('Data', ['Lang', function(Lang) {

        var _Data = {};

        // Public API here
        _Data.menu = [{
            name: Lang.literals.MENU.WHO,
            path: "/who",
            relativeData: {
              sentence01 : "A transforming experience that will enable you to play a role in shaping the world."
            }
        }, {
            name: Lang.literals.MENU.WHAT,
            path: "/what",
            relativeData: {
              sentence01 : "A transforming experience that will enable you to play a role in shaping the world."
            }
        }, {
            name: Lang.literals.MENU.HOW,
            path: "/how",
            relativeData: {
              sentence01 : "A transforming experience that will enable you to play a role in shaping the world."
            }
        }, {
            name: Lang.literals.MENU.WHERE,
            path: "/where",
            relativeData: {
              sentence01 : "A transforming experience that will enable you to play a role in shaping the world."
            }
        }, {
            name: Lang.literals.MENU.INFO,
            path: "/info",
            relativeData: {
              sentence01 : "A transforming experience that will enable you to play a role in shaping the world."
            }
        }];


        return _Data;
    }]);
