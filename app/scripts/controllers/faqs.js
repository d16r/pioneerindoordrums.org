'use strict';

angular.module('pioApp').controller('FAQCtrl', function ($scope, $modal, FAQ, Page) {
    Page.setTitle('Pioneer Indoor - FAQs')

    $scope.faqs = FAQ.all;
    
    $scope.showDeleteModal = function() {
        var modalInstance = $modal.open({
          templateUrl: 'delete.html',
          controller: 'ModalInstanceCtrl'
        });
    }
    
    $scope.showEditModal = function() {
        var modalInstance = $modal.open({
          templateUrl: 'createAndUpdate.html',
          controller: 'ModalInstanceCtrl',
          size: 'lg'
        });
    }
    
    $scope.showCreateModal = function() {
        var modalInstance = $modal.open({
          templateUrl: 'createAndUpdate.html',
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
