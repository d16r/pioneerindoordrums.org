'use strict';

angular.module('pioApp').controller('ContactCtrl', function ($scope, $http) {
    $scope.sendContactForm = function() {
        alert('sent!');
    }
});
