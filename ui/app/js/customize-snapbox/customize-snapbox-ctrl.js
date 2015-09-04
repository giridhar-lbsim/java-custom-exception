angular.module( 'customize-snapbox', ['user'] ).config( function( $stateProvider ) {
  $stateProvider.state( 'customize-snapbox', {
    url: '/createsnapbox',
    templateUrl: 'customize-snapbox/customize-snapbox.tpl',
    controller: 'CustomizeSnapboxCtrl'
  } );
} ).controller( 'CustomizeSnapboxCtrl', function( $scope, $state, CustomizeSnapboxService ) {
$scope.customizeSnapboxCtrl = {};
CustomizeSnapboxService.customizeSnapbox().success(function(response){
console.log("response",response);
if(response.data){
	$scope.customizeSnapboxCtrl.productList = response.data;
}
});
  // console.log("HomeCtrl");
  //   $state.go( 'login' );
} );
