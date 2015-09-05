<div id="nav">
  <div id="nav_wrapper">
    <ul>
      <li>
        <a href="#">
          <span class="logo-snap">Snap</span>
          <span class="logo-box">Box</span>
        </a>
      </li>
      <li><a href="#">Home</a> </li>
      <li> <a href="#">Blog</a> </li>
      <li> <a href="#">Boxes</a>
        <ul>
          <li><a href="#" ui-sref="buy-snapbox({cat:'babycare'})">Babycare Box</a> </li>
          <li><a href="#" ui-sref="buy-snapbox({cat:'grooming'})">Grooming Box</a> </li>
          <li><a href="#" ui-sref="buy-snapbox({cat:'beauty'})">Beauty Box</a> </li>
          <li><a href="#" ui-sref="buy-snapbox({cat:'groceries'})">Groceries Box</a> </li>
          <li><a href="#" ui-sref="buy-snapbox({cat:'custom'})">MySnapBox</a> </li>
        </ul>
      </li>
      <li> <a href="#">Contact Us</a> </li>
      <li> <a href="#" ui-sref="login">Sign In</a> </li>
      <li> <a href="#" ui-sref="signup">Sign Up</a> </li>
    </ul>
  </div>
  <!-- Nav wrapper end -->
</div>
<!-- Nav end -->
<!-- section starts -->
<section>
  <article class="baby-box">
    <div class="box-header">
      <h1>Buy SnapBox</h1>
    </div>
    <div class="box-content">
      <h3>Choose from different categories of snapboxes</h3> <h3><br></h3>
    </div>
    <div class="text-center" style="margin-top:80px;">
      <button class="buy-btn" ui-sref="buy-snapbox"> Buy SnapBox </button>
    </div>
    <div>
    	
    </div>
  </article>
</section>
<section>
  <article class="baby-box1">
    <div class="box-header">
      <h1>Gift SnapBox</h1>
    </div>
    <div class="box-content">
      <h3>Gifting a SnapBox to your dear ones is a great </h3> <h3> way to show love and care.</h3>
    </div>
    <div class="text-center" style="margin-top:80px;">
      <button class="buy-btn"> Gift SnapBox </button>
    </div>
  </article>
</section>
<section>
  <article class="baby-box2">
    <div class="box-header">
      <h1>Refer SnapBox</h1>
    </div>
    <div class="box-content">
      <h3>Refer a SnapBox to friends and relatives and Earn reward points </h3> <h3>and discounts on your future subscriptions.</h3>
    </div>
    <div class="text-center" style="margin-top:80px;">
      <button class="buy-btn"> Refer Now </button>
    </div>
  </article>
</section>
<section>
  <article class="baby-box3">
    <div class="box-header">
      <h1>Create MySnapBox</h1>
    </div>
    <div class="box-content">
      <h3>Create your own SnapBox as per your needs and we will make sure that  </h3> <h3>the products you need are delivered every month on time.</h3>
    </div>
    <div class="text-center" style="margin-top:80px;">
      <button class="buy-btn" ui-sref="customize-snapbox"> Customize SnapBox </button>
    </div>
  </article>
</section>
<ui-view></ui-view>
