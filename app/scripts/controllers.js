'use strict';

angular.module('pioApp')
  .controller('ContactCtrl', function ($scope) {
    $scope.submitContact = function() {
        alert("We sent something!");
    }
  });
