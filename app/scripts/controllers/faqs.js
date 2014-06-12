'use strict';

angular.module('pioApp').controller('FAQCtrl', function ($scope, FAQ, Page) {
    Page.setTitle('Pioneer Indoor - FAQs')

    $scope.faqs = FAQ.all;
    
    $scope.setIdToDelete = function(id) {
        $scope.deleteId = id;
    }
    
    $scope.setValuesForCreate = function() {
        $scope.isUpdate = false;
        resetFAQValues();
    }
    
    $scope.setValuesForUpdate = function(id, faq) {
        $scope.isUpdate = true;
        $scope.faq = faq;
        $scope.faqId = id;
    }
    
    $scope.deleteQuestion = function() {
        FAQ.remove($scope.deleteId);
        $scope.deleteId = null;
    }
    
    $scope.updateFAQ = function() {
        FAQ.update($scope.faqId, $scope.faq);
        resetFAQValues();
    }
    
    $scope.submitNewFAQ = function() {
        FAQ.create($scope.faq);
        resetFAQValues();
    }
    
    var resetFAQValues = function() {
        $scope.faq = null;
        $scope.faqId = null;
    }
});
