angular.module( 'login', [] ).config( function( $stateProvider ) {
  $stateProvider.state( 'login', {
    url: '/login',
    templateUrl: 'login/login.tpl',
    controller: 'LoginCtrl'
  } );
} ).controller( 'LoginCtrl', function( $scope, LoginService,$state, $rootScope) {
  $scope.loginCtrl = {
    user: {}
  };
  $scope.validateUser = function( loginDto ) {
    // console.log("email in",loginDto.email);
    LoginService.findByEmail( loginDto.email, loginDto.password ).success( function( response ) {
      console.log("response",response);

      if(response === true){
        $rootScope.user=loginDto.email;
        toastr.success( "Login Successfully." );
        $state.go('home');
      }else{
        toastr.success( "User Not Found" );
      }
      
      
    } );
  };
  /*$scope.goToHomePage = function() {
    $state.go('signup');
  };*/
} );
