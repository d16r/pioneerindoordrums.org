'use strict';

app.factory('Auth', function ($firebaseSimpleLogin, $rootScope, FIREBASE_URL) {
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
    
    $rootScope.signedIn = function() {
        return Auth.signedIn();
    };
    
    $rootScope.logout = function() {
        return Auth.logout();
    }
    
    $rootScope.$on('$firebaseSimpleLogin:login', function(e, authUser) {
        $rootScope.currentUser = authUser;
    });

    $rootScope.$on('$firebaseSimpleLogin:logout', function() {
        delete $rootScope.currentUser;
    });

    return Auth;
});
