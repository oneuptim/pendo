'use strict';

app.controller('AuthCtrl', function(Auth, $state) {

    var auth = this;

    auth.login = function() {
        console.log('Login clicked');

        return Auth.login().then(function(result) {
            $state.go('app.home');
            // Redirects users to home page after the user logs in successfull!
        });

    };

    auth.logout = function() {
        Auth.logout();
    };
});
