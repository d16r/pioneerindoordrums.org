'use strict';

angular.module('pioApp').controller('FAQCtrl', function ($scope, FAQ, Page) {
    Page.setTitle('Pioneer Indoor - FAQs')

    $scope.faqs = FAQ.all;
    
    $scope.setIdToDelete = function(id) {
        $scope.deleteId = id;
    }
    
    $scope.setValuesForCreate = function() {
        $scope.isUpdate = false;
        $scope.faq = '';
        $scope.faqId = '';
    }
    
    $scope.setValuesForUpdate = function(id, faq) {
        $scope.isUpdate = true;
        $scope.faq = faq;
        $scope.faqId = id;
    }
    
    $scope.deleteQuestion = function() {
        FAQ.remove($scope.deleteId);
        $scope.deleteId = '';
    }
    
    $scope.updateFAQ = function() {
        FAQ.update($scope.faqId, $scope.faq);
        $scope.faq = '';
        $scope.faqId = '';
    }
    
    $scope.submitNewFAQ = function() {
        FAQ.create($scope.faq);
        $scope.faq = '';
        $scope.faqId = '';
    }
});
