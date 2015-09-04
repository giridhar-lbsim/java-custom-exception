angular.module( 'app' ).factory( 'LoginService', function( Constants, $http ) {
	return {
		findByEmail: function( userName, password ) {
			return $http.get(" http://localhost:8080/snapbox/v1/snapbox/login?username="+userName+"&password="+password);
		},
		signUp: function( userName, password ) {
			return $http.get(" http://localhost:8080/snapbox/v1/snapbox/login/adduser?username="+userName+"&password="+password);
		}
	};
} );
