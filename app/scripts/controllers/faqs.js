'use strict';

angular.module('pioApp').controller('FAQCtrl', function ($scope, FAQ, Page) {
    Page.setTitle('Pioneer Indoor - FAQs')

    $scope.faqs = FAQ.all;
    
    $scope.setIdToDelete = function(id) {
        $scope.deleteId = id;
    }
    
    $scope.deleteQuestion = function() {
        FAQ.remove($scope.deleteId);
        $scope.deleteId = null;
    }
    
    $scope.submitNewFAQ = function(faq) {
        FAQ.create(faq);
    }
});
