'use strict';

/**
 * @ngdoc overview
 * @name projectIeuApp
 * @description
 * # projectIeuApp
 *
 * Main module of the application.
 */
angular
  .module('projectIeuApp', [
    'ngAnimate',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/:main', {
        templateUrl: 'views/sharedView.html',
        controller: 'MainCtrl'
      })
      .when('/:main/:secundary', {
        templateUrl: 'views/subcontentView.html',
        controller: 'MainCtrl'
      })
      
      .when('/info', {
        templateUrl: 'views/sharedView.html',
        controller: 'InfoCtrl'
      })
      .otherwise({
        redirectTo: '/who'
      });
  });