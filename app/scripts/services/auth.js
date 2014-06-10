'use strict';

app.factory('Auth', function ($firebaseSimpleLogin, FIREBASE_URL) {
    var ref = new Firebase(FIREBASE_URL)

    var auth = $firebaseSimpleLogin(ref);

    var Auth = {
        signedIn: function () {
            return auth.user !== null;
        },
        login: function(user) {
            return auth.$login('password', user);
        },
        logout: function() {
            auth.$logout();
        }
    };

    return Auth;
});