angular.module( 'buy-snapbox', ['user'] ).config( function( $stateProvider ) {
  $stateProvider.state( 'buy-snapbox', {
    url: '/buy-snapbox',
    templateUrl: 'buy-snapbox/buy-snapbox.tpl',
    controller: 'BuySnapboxCtrl'
  } );
} ).controller( 'BuySnapboxCtrl', function( $scope, $state ) {

  console.log("BuySnapboxCtrl");
  //   $state.go( 'login' );
} );
