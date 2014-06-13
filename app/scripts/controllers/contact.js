'use strict';

angular.module('pioApp').controller('ContactCtrl', function ($scope, $http, Page) {
    Page.setTitle('Pioneer Indoor - Contact');

    $scope.sendContactForm = function() {
        alert($scope.contact.firstName);
        $http.post('http://0.0.0.0:5000/email/contact', $scope.contact).
          success(function(data, status, headers, config) {
              $scope.message = 'Thanks! Your message was sent, and we will get back to you soon!'
          }).
          error(function(data, status, headers, config) {
              $scope.message = 'Unfortunately, something went wrong with our servers. Feel free to send an email to dshahidehpour@gmail.com';
          });
    }
});
