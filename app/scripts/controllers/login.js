'use strict';

app.controller('LoginCtrl', function ($scope, $location, Auth) {
    $scope.login = function() {
        Auth.login($scope.user).then(function (authUser) {
            $location.path('/admin');
        }, function(error) {
            $scope.error = error.toString();
        });
    }
});
