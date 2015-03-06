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
        templateUrl: 'views/sharedView.html',
        controller: 'AboutCtrl'
      })
      .when('/who', {
        templateUrl: 'views/sharedView.html',
        controller: 'WhoCtrl'
      })
      .when('/what', {
        templateUrl: 'views/sharedView.html',
        controller: 'WhatCtrl'
      })
      .when('/how', {
        templateUrl: 'views/sharedView.html',
        controller: 'HowCtrl'
      })
      .when('/where', {
        templateUrl: 'views/sharedView.html',
        controller: 'WhereCtrl'
      })
      .when('/info', {
        templateUrl: 'views/sharedView.html',
        controller: 'InfoCtrl'
      })
      .otherwise({
        redirectTo: '/who'
      });
  });