'use strict';

angular.module('pioApp').controller('FAQCtrl', function ($scope, $modal, FAQ, Page) {
    Page.setTitle('Pioneer Indoor - FAQs')

    $scope.faqs = FAQ.all;
    
    $scope.showDeleteModal = function(id) {
        var deleteScope = $scope.$new(true);
        deleteScope.id = id;
        
        var modalInstance = $modal.open({
          templateUrl: 'delete.html',
          controller: 'DeleteModalCtrl',
          scope: deleteScope
        });
    }
    
    $scope.showCreateUpdateModal = function(id, faq) {
        var cuScope = $scope.$new(true);
        cuScope.id = id;
        cuScope.faq = faq;
        cuScope.update = !(faq == undefined && id == undefined);
        
        var modalInstance = $modal.open({
          templateUrl: 'createAndUpdate.html',
          controller: 'CreateUpdateModalCtrl',
          size: 'lg',
          scope: cuScope
        });
    }
});

angular.module('pioApp').controller('CreateUpdateModalCtrl', function($scope, $modalInstance, FAQ) {
    $scope.createQuestion = function(faq) {
        FAQ.create(faq);
        $modalInstance.close();
    }
    
    $scope.updateQuestion = function() {
        alert($scope.faq.question);
        $modalInstance.close();
    }
});


angular.module('pioApp').controller('DeleteModalCtrl', function($scope, $modalInstance, FAQ) {
    $scope.deleteQuestion = function () {
        FAQ.remove($scope.id);
        $modalInstance.close();
    };
});
