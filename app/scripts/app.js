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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/who', {
        templateUrl: 'views/who.html',
        controller: 'WhoCtrl'
      })
      .when('/what', {
        templateUrl: 'views/what.html',
        controller: 'WhatCtrl'
      })
      .when('/how', {
        templateUrl: 'views/how.html',
        controller: 'HowCtrl'
      })
      .when('/where', {
        templateUrl: 'views/where.html',
        controller: 'WhereCtrl'
      })
      .when('/info', {
        templateUrl: 'views/info.html',
        controller: 'InfoCtrl'
      })
      .otherwise({
        redirectTo: '/who'
      });
  });
