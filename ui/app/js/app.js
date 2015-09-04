angular.module( 'app', [ 'ui.router', 'templates', 'login', 'home','signup','user', 'customize-snapbox', 'buy-snapbox'] ).config( function( $urlRouterProvider ) {
  $urlRouterProvider.otherwise( '/home' );
} ).run( function() {
} );
