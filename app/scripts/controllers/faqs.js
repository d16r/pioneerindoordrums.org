'use strict';

angular.module('pioApp').controller('FAQCtrl', function ($scope, FAQ) {
    $scope.faqs = FAQ.all;
    $scope.submitNewFAQ = function() {
        FAQ.create($scope.faq)
    }
    $scope.deleteQuestion = function(id) {
        FAQ.remove(id);
    }
});
