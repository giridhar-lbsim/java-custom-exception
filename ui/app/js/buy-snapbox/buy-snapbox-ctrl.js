angular.module( 'buy-snapbox', ['user'] ).config( function( $stateProvider ) {
  $stateProvider.state( 'buy-snapbox', {
    url: '/buy-snapbox/:cat',
    templateUrl: 'buy-snapbox/buy-snapbox.tpl',
    controller: 'BuySnapboxCtrl'
  } );
} ).controller( 'BuySnapboxCtrl', function( $scope, $state, $stateParams ) {
	var cat=$stateParams.cat;
	console.log(cat);

  console.log("BuySnapboxCtrl");
  myFunction(cat);
  function myFunction(cat){
  	$scope.detailObj = {};
  	if(cat == "babycare"){
  		$scope.detailObj.name="Baby Care Box";
  		$scope.detailObj.desc="Get the Best of baby products for your little ones, with all essentials kit. We offer all the products with special surprises every month.";
  		$scope.detailObj.price="";
  	} else if (cat == "grooming"){
  		$scope.detailObj.name="Grooming Box";
  		$scope.detailObj.desc="Get the best in class kit for your grooming, from hair gel, face wash to more sophisticated products. We will be offering new latest products in the market to keep you updated with the latest trends in the market. See what our customers are buying, bragging, and beaming about. Show us how you're making the most of your Snapbox by posting to Twitter or Instagram with #Snapbox";
  		$scope.detailObj.price="";

  	}else if (cat == "beauty"){
  		$scope.detailObj.name="Beauty Box";
  		$scope.detailObj.desc="We offer best in class custom products specially suited for the today's women. Five personalized beauty products delivered right to your door each month. It’s the best way to find the products you’ll love. Watch out for the Surprises every month. ";
  		$scope.detailObj.price="";

  	}else if (cat == "groceries"){
  		$scope.detailObj.name="Groceries Box";
  		$scope.detailObj.desc="";
  		$scope.detailObj.price="";

  	}else {
  		$scope.detailObj.name="Customize your own box";
  		$scope.detailObj.desc="Gifting a SnapBox to your dear ones is a great way to show love and care. Gifting a SnapBox to your dear ones is a great way to show love and care. Refer a SnapBox to friends and relatives and Earn reward points and discounts on your future subscriptions. Create your own SnapBox as per your needs and we will make sure that the products you need are delivered every month on time. Not only you get price protection , you also save yourself from future uncertainty when product goes out of stock or gets expensive Refer a SnapBox to friends and relatives and Earn reward points and discounts on your future subscriptions. Create your own SnapBox as per your needs and we will make sure that the products you need are delivered every month on time. Not only you get price protection , you also save yourself from future uncertainty when product goes out of stock or gets expensive";
  		$scope.detailObj.price="";

  	}

  }



  //   $state.go( 'login' );
});
