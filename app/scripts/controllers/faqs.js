'use strict';

angular.module('pioApp').controller('FAQCtrl', function ($scope, FAQ, Page) {
    Page.setTitle('Pioneer Indoor - FAQs')

    $scope.faqs = FAQ.all;
    
    $scope.showDeleteModal = function() {
        alert('this should show the delete modal.');
    }
    
    $scope.showEditModal = function() {
        alert('this should show the edit modal');
    }
    
    $scope.showCreateModal = function() {
        alert('this should show the create modal');
    }
    
    /*$scope.deleteQuestion = function() {
        FAQ.remove($scope.deleteId);
    }
    
    $scope.updateFAQ = function() {
        FAQ.update($scope.faqId, $scope.faq);
    }
    
    $scope.submitNewFAQ = function() {
        FAQ.create($scope.faq);
    }*/
});
