'use strict';

angular.module('pioApp').controller('ContactCtrl', function ($scope, Message) {

    $scope.sendContactForm = function() {
        Message.create($scope.contact);
        $scope.message = 'Thanks! Your message was sent. We will get back to you ASAP!';
        $scope.success = true;
    }
});
