angular.module( 'app' ).factory( 'CustomizeSnapboxService', function( Constants, $http ) {
	return {
		customizeSnapbox: function() {
			return $http.get("http://localhost:8080/v1/snapbox/product/list");
		}
	};
} );
