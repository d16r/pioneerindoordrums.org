'use strict';

app.factory('Message', function ($firebase, FIREBASE_URL) {
    var ref = new Firebase(FIREBASE_URL + 'message');
 
    var messages = $firebase(ref);
    
    var Message = {
        create: function (message) {
            return messages.$add(message);
        }
    };
    
    return Message;
});
