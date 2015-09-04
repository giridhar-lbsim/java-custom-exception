angular.module( 'signup', [] ).config( function( $stateProvider ) {
  $stateProvider.state( 'signup', {
    url: '/signup',
    templateUrl: 'signup/signup.tpl',
    controller: 'SignupCtrl'
  } );
} ).controller( 'SignupCtrl', function( $scope, $state, SignupService, $rootScope ) {
  $scope.SignupCtrl = {
    user: {},
  };
  console.log("$rootScope.user",$rootScope.user);
  $scope.signUpUser = function( user ) {
    console.log("in controller");
    SignupService.signUpUser( user.email, user.password ).success( function( response ) {
      console.log("response",response);
      if(response === true){
        $rootScope.user = user.email;
        toastr.success("Signup Successfully.");
        $state.go('home');
      }else{
        toastr.error("User already exists.");
      }
    } );
  };
} );
