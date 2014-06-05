'use strict';

app.factory('Auditionee', function ($firebase, FIREBASE_URL) {
    var ref = new Firebase(FIREBASE_URL + 'auditionees');
 
    var auditionees = $firebase(ref);
    
    var Auditionee = {
        all: auditionees,
        create: function (auditionee) {
            return auditionees.$add(auditionee);
        }
    };
    
    return Auditionee;
});
