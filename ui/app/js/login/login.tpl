<!-- <div class="div-center">
  <form ng-submit="validateUser(loginCtrl.user)">
    <div class="form-group center">
      <span class="signin-font-size">Sign In</span>
    </div>
    <div class="form-group">
      <label for="userEmail">Email</label>
      <input type="email" class="form-control" placeholder="Email" id="userEmail" ng-model="loginCtrl.user.email"> </div>
        <button class="btn btn-block btn-primary">Sign in</button>
        <div class="form-group"></div>
      </form>
      <div class="form-group"></div>
      <button class="btn btn-block btn-success" data-ng-click="goToHomePage()">Sign Up</button>
    </div>
 -->
<!-- login starts -->
<form ng-submit="validateUser(loginCtrl.user)">
  <section class="snap-login-container">
    <article class="snap-article">
      <h1 class="snap-header">Login</h1>
      <div>
        <input class="snap-input " placeholder="Email" name="user" type="email" ng-model="loginCtrl.user.email"> </div>
      <div>
        <input class="snap-input " placeholder="Password" name="pass" type="password" ng-model="loginCtrl.user.password"> </div>
      <div>
        <button class="snap-submit-btn" type="submit">Sign In</button>
      </div>
    </article>
  </section>
</form>
<!-- login end -->
