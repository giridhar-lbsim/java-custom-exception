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
  $scope.check = function(){
  	var count = $("#hourlyOffrWrper :checked").size();
  	if(count===0) {
  		alert("Please select atleast one product");
  	} else if(count>6) {
  		alert("You can select maximum 6 products. Please update the list.");
  	}else {
		location.href = '/subscription';
  	}
  };
} );
