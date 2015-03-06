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
            icon: "who",
            relativeData: {
                sentence01: "A transforming experience that will enable you to play a role in shaping the world.",
                background: "images/background_who.jpg"
            },
            submenu : [{
              path: "/who/ourstudents",
              name: "Our Students"
            },{
              path: "/who/ourfaculty",
              name: "Our Faculty"
            },{
              path: "/who/youradvisor",
              name: "Your Advisor"
            },{
              path: "/who/iebuisiness",
              name: "IE Business School"
            }]
        }, {
            name: Lang.literals.MENU.WHAT,
            path: "/what",
            icon: "what",
            relativeData: {
                sentence01: "Our programs are flexible to the professional aspirations of the professional aspirations of the students",
                background: "images/background_what.jpg"
            },
            submenu : [{
              path: "/who/ourstudents",
              name: "Our Students"
            },{
              path: "/who/ourfaculty",
              name: "Our Faculty"
            },{
              path: "/who/youradvisor",
              name: "Your Advisor"
            },{
              path: "/who/iebuisiness",
              name: "IE Business School"
            }]
        }, {
            name: Lang.literals.MENU.HOW,
            path: "/how",
            icon: "how",
            relativeData: {
                sentence01: "A Humanistic education provides personal and intellectual enrichment",
                background: "images/background_how.jpg"
            },
            submenu : [{
              path: "/who/ourstudents",
              name: "Our Students"
            },{
              path: "/who/ourfaculty",
              name: "Our Faculty"
            },{
              path: "/who/youradvisor",
              name: "Your Advisor"
            },{
              path: "/who/iebuisiness",
              name: "IE Business School"
            }]
        }, {
            name: Lang.literals.MENU.WHERE,
            path: "/where",
            icon: "where",
            relativeData: {
                sentence01: "IE University's Campus providing students with the comforts of modern living",
                background: "images/background_where.jpg"
            },
            submenu : [{
              path: "/who/ourstudents",
              name: "Our Students"
            },{
              path: "/who/ourfaculty",
              name: "Our Faculty"
            },{
              path: "/who/youradvisor",
              name: "Your Advisor"
            },{
              path: "/who/iebuisiness",
              name: "IE Business School"
            }]
        }];

        _Data.info = {
            name: Lang.literals.MENU.INFO,
            path: "/info",
            icon: "info",
        };

        return _Data;
    }]);
