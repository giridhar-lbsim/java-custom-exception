<h3>Please select any 6 products to create your own snapbox!<h3>

	<div id="hourlyOffrWrper" style="width:1112px;">                    
		<ul class="floatArea offerGrid">
			<li ng-repeat="product in customizeSnapboxCtrl.productList" class="item Mobiles box"><div class="OffersContentBox flt">
				<div class="OffersContentIMG flt"><img height="225" src="http://localhost:8080/{{product.img}}" style="opacity: 1;"></div>
				<div class="OffersContTxt flt">
					<div class="OffersTitle flt">{{product.title}}</div>
					<div class="posAbs disOfrTxt"> 12%<br>Off </div>
					<div class="OffersContLFT flt">
						<div class="SingleOfferTxt flt">
							<span>MRP : <span style="text-decoration:line-through;"> Rs.{{product.mrp}} </span></span><br>
							Offer price: Rs.{{product.offer}}
						</div>
					</div>
					<input type="checkbox" name="product" value="{{product.SUPC}}">
				</div>
			</li>
		</ul>
	</div>

	<button  ng-click="check()">Create SnapBox</button>
