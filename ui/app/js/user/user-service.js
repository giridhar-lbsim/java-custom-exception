angular.module('app').factory('UserService',  function(Constants, $http){
	return {
		findUserByEmail: function(email){
			return $http.get( Constants.APP_URL + 'user/id?email='+email);
		}
		
	};
});