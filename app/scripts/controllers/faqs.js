'use strict';

angular.module('pioApp').controller('FAQCtrl', function ($scope, FAQ, Page) {
    Page.setTitle('Pioneer Indoor - FAQs')

    $scope.faqs = FAQ.all;
    
    $scope.setIdToDelete = function(id) {
        $scope.deleteId = id;
    }
    
    $scope.setValuesForCreate = function() {
        $scope.isUpdate = false;
    }
    
    $scope.setValuesForUpdate = function() {
        $scope.isUpdate = true;
    }
    
    $scope.deleteQuestion = function() {
        FAQ.remove($scope.deleteId);
    }
    
    $scope.updateFAQ = function() {
        FAQ.update($scope.faqId, $scope.faq);
    }
    
    $scope.submitNewFAQ = function() {
        FAQ.create($scope.faq);
    }
});
