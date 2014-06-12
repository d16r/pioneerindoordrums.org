'use strict';

angular.module('pioApp').controller('FAQCtrl', function ($scope, FAQ, Page, $modal) {
    Page.setTitle('Pioneer Indoor - FAQs')

    $scope.faqs = FAQ.all;
    
    $scope.deleteQuestion = function() {
        alert('hey');
    }
    
    $scope.submitNewFAQ = function() {
        FAQ.create($scope.faq)
        $scope.faq.question = ''
        $scope.faq.answer = ''
    }
});
