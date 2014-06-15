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
    
    $scope.showUpdateModal = function(id, faq) {
        var updateScope = $scope.$new(true);
        updateScope.id = id;
        updateScope.faq = faq;
        updateScope.update = true;
        
        var modalInstance = $modal.open({
          templateUrl: 'createAndUpdate.html',
          controller: 'CreateUpdateModalCtrl',
          size: 'lg',
          scope: updateScope
        });
    }
    
    $scope.showCreateModal = function() {
        var createScope = $scope.$new(true);
        createScope.update = false;
        
        var modalInstance = $modal.open({
          templateUrl: 'createAndUpdate.html',
          controller: 'CreateUpdateModalCtrl',
          size: 'lg',
          scope: createScope
        });
    }
});

angular.module('pioApp').controller('CreateUpdateModalCtrl', function($scope, $modalInstance, FAQ) {
    $scope.createQuestion = function(faq) {
        FAQ.create(faq);
        $modalInstance.close();
    }
    
    $scope.updateQuestion = function() {
        alert('update');
    }
});


angular.module('pioApp').controller('DeleteModalCtrl', function($scope, $modalInstance, FAQ, id) {
    $scope.deleteQuestion = function () {
        FAQ.remove(id);
        $modalInstance.close();
    };
});
