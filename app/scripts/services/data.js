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
            submenu: [{
                path: "/who/ourstudents",
                name: "Our Students",
                relativeData: {
                    sentence01: "Our students",
                    background: "images/background_who.jpg"
                },
            }, {
                path: "/who/ourfaculty",
                name: "Our Faculty",
                relativeData: {
                    sentence01: "Our faculty",
                    background: "images/background_who.jpg"
                },
            }, {
                path: "/who/youradvisor",
                name: "Your Advisor",
                relativeData: {
                    sentence01: "Your advisor",
                    background: "images/background_who.jpg"
                },
            }, {
                path: "/who/iebuisiness",
                name: "IE Business School",
                relativeData: {
                    sentence01: "IE Business School",
                    background: "images/background_who.jpg"
                },
            }]
        }, {
            name: Lang.literals.MENU.WHAT,
            path: "/what",
            icon: "what",
            relativeData: {
                sentence01: "Our programs are flexible to the professional aspirations of the professional aspirations of the students",
                background: "images/background_what.jpg"
            },
            submenu: [{
                path: "/who/ourstudents",
                name: "Our Students",
                relativeData: {
                    sentence01: "A transforming experience that will enable you to play a role in shaping the world.",
                    background: "images/background_who.jpg"
                },
            }, {
                path: "/who/ourfaculty",
                name: "Our Faculty",
                relativeData: {
                    sentence01: "A transforming experience that will enable you to play a role in shaping the world.",
                    background: "images/background_who.jpg"
                },
            }, {
                path: "/who/youradvisor",
                name: "Your Advisor",
                relativeData: {
                    sentence01: "A transforming experience that will enable you to play a role in shaping the world.",
                    background: "images/background_who.jpg"
                },
            }, {
                path: "/who/iebuisiness",
                name: "IE Business School",
                relativeData: {
                    sentence01: "A transforming experience that will enable you to play a role in shaping the world.",
                    background: "images/background_who.jpg"
                },
            }]
        }, {
            name: Lang.literals.MENU.HOW,
            path: "/how",
            icon: "how",
            relativeData: {
                sentence01: "A Humanistic education provides personal and intellectual enrichment",
                background: "images/background_how.jpg"
            },
            submenu: [{
                path: "/who/ourstudents",
                name: "Our Students",
                relativeData: {
                    sentence01: "A transforming experience that will enable you to play a role in shaping the world.",
                    background: "images/background_who.jpg"
                },
            }, {
                path: "/who/ourfaculty",
                name: "Our Faculty",
                relativeData: {
                    sentence01: "A transforming experience that will enable you to play a role in shaping the world.",
                    background: "images/background_who.jpg"
                },
            }, {
                path: "/who/youradvisor",
                name: "Your Advisor",
                relativeData: {
                    sentence01: "A transforming experience that will enable you to play a role in shaping the world.",
                    background: "images/background_who.jpg"
                },
            }, {
                path: "/who/iebuisiness",
                name: "IE Business School",
                relativeData: {
                    sentence01: "A transforming experience that will enable you to play a role in shaping the world.",
                    background: "images/background_who.jpg"
                },
            }]
        }, {
            name: Lang.literals.MENU.WHERE,
            path: "/where",
            icon: "where",
            relativeData: {
                sentence01: "IE University's Campus providing students with the comforts of modern living",
                background: "images/background_where.jpg"
            },
            submenu: [{
                path: "/who/ourstudents",
                name: "Our Students",
                relativeData: {
                    sentence01: "A transforming experience that will enable you to play a role in shaping the world.",
                    background: "images/background_who.jpg"
                },
            }, {
                path: "/who/ourfaculty",
                name: "Our Faculty",
                relativeData: {
                    sentence01: "A transforming experience that will enable you to play a role in shaping the world.",
                    background: "images/background_who.jpg"
                },
            }, {
                path: "/who/youradvisor",
                name: "Your Advisor",
                relativeData: {
                    sentence01: "A transforming experience that will enable you to play a role in shaping the world.",
                    background: "images/background_who.jpg"
                },
            }, {
                path: "/who/iebuisiness",
                name: "IE Business School",
                relativeData: {
                    sentence01: "A transforming experience that will enable you to play a role in shaping the world.",
                    background: "images/background_who.jpg"
                },
            }]
        }];

        _Data.getData = function(p_routeParams) {

            var _i = 0;
            var _j = 0;
            var _main, _secundary;
            if (p_routeParams && p_routeParams.secundary) {
                for (_i = 0; _i < _Data.menu.length; _i++) {
                    for (_j = 0; _j < _Data.menu.length; _j++) {
                        _main = _Data.menu[_i].submenu[_j].path.split('/')[1];
                        _secundary = _Data.menu[_i].submenu[_j].path.split('/')[2];
                        if (p_routeParams.main == _main && p_routeParams.secundary == _secundary) {
                            return _Data.menu[_i].submenu[_j]
                        }
                    }
                }
            } else if (p_routeParams.main) {
                for (_i = 0; _i < _Data.menu.length; _i++) {
                    _main = _Data.menu[_i].path.split('/')[1];
                    if (p_routeParams.main == _main) {
                        return _Data.menu[_i];
                    }
                }
            }

        }

        _Data.info = {
            name: Lang.literals.MENU.INFO,
            path: "/info",
            icon: "info",
        };

        return _Data;
    }]);
