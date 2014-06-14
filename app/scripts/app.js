'use strict';

var app = angular.module('pioApp', ['ngCookies',
                                    'ngResource',
                                    'ngSanitize',
                                    'ngRoute',
                                    'firebase',
                                    'mgcrea.ngStrap.modal',
                                    'mgcrea.ngStrap.popover',
                                    'angulartics',
                                    'angulartics.google.analytics'
                                    ]);

app.config(function ($routeProvider, $httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    
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
  
app.run(function ($location, $rootScope, Auth) {
    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
        if (next.templateUrl == 'views/admin.html') {
            if (!$rootScope.signedIn()) {
                $location.path('/login');
            }
        }
    });
})

app.constant('FIREBASE_URL', 'https://pioneerindoordrums.firebaseio.com/');
