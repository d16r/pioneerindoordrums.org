'use strict';

angular.module('pioApp').controller('FAQCtrl', function ($scope, FAQ, Page, $modal) {
    Page.setTitle('Pioneer Indoor - FAQs')

    $scope.faqs = FAQ.all;
    $scope.submitNewFAQ = function() {
        FAQ.create($scope.faq)
        $scope.faq.question = ''
        $scope.faq.answer = ''
    }
    $scope.deleteQuestion = function(id) {
        FAQ.remove(id);
    }
    
    $scope.showDeleteModal = function() {
        $modal({template: 'views/modals/delete.html', show: true});
    }
    
    $scope.modal = {title: 'Title', content: 'Hello Modal<br />This is a multiline message!'};
});
