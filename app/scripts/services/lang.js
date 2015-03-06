'use strict';

/**
 * @ngdoc service
 * @name projectIeuApp.Lang
 * @description
 * # Lang
 * Factory in the projectIeuApp.
 */
angular.module('projectIeuApp')
    .factory('Lang', function() {

        var _Lang = {};

        var _translates = {};

        _translates.en_EN = {
            MENU: {
                "WHO": "Who",
                "WHAT": "What",
                "HOW": "How",
                "WHERE": "Where",
                "INFO": "Info"
            }
        };

        _translates.es_ES = {
            MENU: {
                "WHO": "Quién",
                "WHAT": "Qué",
                "HOW": "Cómo",
                "WHERE": "Dónde",
                "INFO": "Info"
            }
        };

        _Lang.current = 'en_EN';

        _Lang.set = function(p_lang) {
            if (!_translates[p_lang]) return;
            _Lang.current = p_lang;
            _Lang.literals = _translates[p_lang];
        }

        // Public API here
        _Lang.literals = _translates.en_EN;


        return _Lang;
    });
