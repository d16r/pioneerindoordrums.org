'use strict';

var app = angular.module('pioApp', ['ngCookies',
                                    'ngResource',
                                    'ngSanitize',
                                    'ngRoute',
                                    'firebase',
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
      .when('/admin', {
        templateUrl: 'views/admin.html'
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
            if (!Auth.signedIn() && current != undefined) {
                $location.path('/login');
            }
        }
    });
})

app.constant('FIREBASE_URL', 'https://pioneerindoordrums.firebaseio.com/');
