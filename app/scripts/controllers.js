'use strict';

angular.module('pioApp')
  .controller('ContactCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  .controller('StaffCtrl', function ($scope) {
    $scope.staffMembers = [
        {
            name: 'Dustin Shahidehpour',
            position: 'Front Ensemble Tech',
            picture: 'http://placekitten.com/g/200/250',
            bio: "This is dustin's amazing bio."
        },
        {
            name: 'Tom Moffitt',
            position: 'Front Ensemble Caption Head',
            picture: 'http://placekitten.com/g/200/250',
            bio: "Hi, my name is Thomas Moffitt."
        }
    ]
  })
  .controller('AuditionCtrl', function ($scope) {
    $scope.instruments = ['Snare', 'Tenors', 'Bass Drum', 'Cymbals', 'Front Ensemble']
    $scope.submitAuditionForm = function() {
      alert("Audition form submitted!");
    }
  });
