'use strict';

var app = angular.module('pioApp', ['ngCookies',
                                    'ngResource',
                                    'ngSanitize',
                                    'ngRoute',
                                    'firebase'
                                    ]);

app.config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/faqs', {
        templateUrl: 'views/faqs.html'
      })
      .when('/admin', {
        templateUrl: 'views/admin.html'
      })
      .when('/history', {
        templateUrl: 'views/history.html'
      })
      .when('/about', {
        templateUrl: 'views/about.html'
      })
      .when('/staff', {
        templateUrl: 'views/staff.html'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl'
      })
      .when('/auditions', {
        templateUrl: 'views/auditions.html',
        controller: 'AuditionCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

app.constant('FIREBASE_URL', 'https://pioneerindoordrums.firebaseio.com/');
