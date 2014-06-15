'use strict';

angular.module('pioApp').controller('FAQCtrl', function ($scope, $modal, FAQ, Page) {
    Page.setTitle('Pioneer Indoor - FAQs')

    $scope.faqs = FAQ.all;
    
    $scope.showDeleteModal = function() {
        alert('this should show the delete modal.');
    }
    
    $scope.showEditModal = function() {
        alert('this should show the edit modal');
    }
    
    $scope.items = ['item', 'item'];
    
    $scope.showCreateModal = function() {
        var modalInstance = $modal.open({
          templateUrl: 'myModalContent.html',
          controller: 'ModalInstanceCtrl',
          size: 'lg'
        });
    }
});

var ModalInstanceCtrl = function ($scope, $modalInstance) {

  $scope.ok = function () {
    alert($scope.text);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };
};
