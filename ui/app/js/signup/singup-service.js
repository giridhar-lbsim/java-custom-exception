angular.module( 'app' ).factory( 'SignupService', function( Constants, $http ) {
	return {
		signUpUser: function( userName, password ) {
			return $http.get(" http://localhost:8080/snapbox/v1/snapbox/login/adduser?username="+userName+"&password="+password);
		}
	};
} );
