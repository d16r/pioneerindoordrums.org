'use strict';

angular.module('pioApp').controller('FAQCtrl', function ($scope, FAQ) {
    $scope.questions = FAQ.all;
    $scope.submitNewFAQ = function() {
        FAQ.create($scope.faq)
    }
});
