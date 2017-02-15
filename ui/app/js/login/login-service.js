angular.module( 'app' ).factory( 'LoginService', function( Constants, $http ) {
	return {
		findByEmail: function( email ) {
			console.log("email in service",email);
			return $http.get( Constants.APP_URL + 'user/id?email='+email);
		}
	};
} );
