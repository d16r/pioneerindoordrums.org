'use strict';

angular.module('pioApp').controller('ContactCtrl', function ($scope, $http, Page) {
    Page.setTitle('Pioneer Indoor - Contact');

    $scope.sendContactForm = function() {
        alert('sent!');
    }
});
