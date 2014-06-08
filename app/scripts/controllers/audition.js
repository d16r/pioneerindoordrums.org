'use strict';

angular.module('pioApp').controller('AuditionCtrl', function ($scope, $cookies, Auditionee) {
    $scope.registrationComplete = $cookies.hasRegistered;
    $scope.instruments = ['Snare', 'Tenors', 'Bass Drum', 'Cymbals', 'Front Ensemble'];
    $scope.states = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
      'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii',
      'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana',
      'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota',
      'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
      'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
      'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island',
      'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
      'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
    ];
    $scope.submitAuditionForm = function() {
        Auditionee.create($scope.auditionee);
        $cookies.hasRegistered = true;
        $scope.registrationComplete = true;
    };
});
