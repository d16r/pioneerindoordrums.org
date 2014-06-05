'use strict';

angular.module('pioApp').controller('AuditioneesCtrl', function ($scope, Auditionee) {
    $scope.auditionees = Auditionee.all;
});
