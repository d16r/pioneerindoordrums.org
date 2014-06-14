'use strict';

angular.module('pioApp').controller('ContactCtrl', function ($scope, $http, Page) {
    Page.setTitle('Pioneer Indoor - Contact');

    $scope.sendContactForm = function() {
        $scope.message = 'Thanks! Your message was sent. We will get back to you ASAP!';
        $scope.success = true;
        /*$http.post('http://0.0.0.0:5000/email/contact', $scope.contact).
          success(function(data, status, headers, config) {
              $scope.message = 'Thanks! Your message was sent, and we will get back to you soon!'
              $scope.success = true;
          }).
          error(function(data, status, headers, config) {
              $scope.error = true;
              $scope.message = 'Unfortunately, something went wrong with our servers. Feel free to send an email to dshahidehpour@gmail.com';
          });
        */
    }
});
