'use strict';

angular.module('pioApp').controller('FAQCtrl', function ($scope, $modal, FAQ, Page) {
    Page.setTitle('Pioneer Indoor - FAQs')

    $scope.faqs = FAQ.all;
    
    $scope.showDeleteModal = function(id) {
        var modalInstance = $modal.open({
          templateUrl: 'delete.html',
          controller: 'DeleteModalCtrl',
          resolve: {
              id: function() { return id; }
          }
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

angular.module('pioApp').controller('DeleteModalCtrl', function($scope, $modalInstance, FAQ, id) {
  $scope.deleteQuestion = function () {
      FAQ.remove(id);
      $modalInstance.close();
  };
});
