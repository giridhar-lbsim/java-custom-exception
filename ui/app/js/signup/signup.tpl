<!-- <div class="div-center">
  <div class="form-group center">
    <span class="signin-font-size">Sign Up</span>
  </div>
  <form ng-submit="signUpUser(SignupCtrl.user)">
    <div class="form-group">
      <label for="firstName">First Name</label>
      <input type="text" class="form-control" id="firstName" placeholder="First Name" ng-model="SignupCtrl.user.firstName"> </div>
    <div class="form-group">
      <label for="lastName">Last Name</label>
      <input type="text" placeholder="Last Name" id="lastName" class="form-control" ng-model="SignupCtrl.user.lastName"> </div>
    <label for="userGender">Gender</label>
    <div class="form-group">
      <select name="gender" id="userGender" class="form-control" ng-model="SignupCtrl.user.gender" ng-options="gender as gender.label for  gender in SignupCtrl.genderOptions"> </select>
    </div>
    <div class="form-group">
      <label for="userEmail">Email</label>
      <input type="email" name="Email" id="userEmail" class="form-control" placeholder="Enter Email" ng-model="SignupCtrl.user.email"> </div>
    <div class="form-group">
      <label for="lastName">Password</label>
      <input type="password" name="password" id="userPassword" class="form-control" placeholder="Enter Password" ng-model="SignupCtrl.user.password"> </div>
    <button class="btn btn-block btn-success">Sign Up</button>
  </form>
</div>
 -->
 <form ng-submit="validateUser(SignupCtrl.user)">
  <section class="snap-login-container">
    <article class="snap-article">
      <h1 class="snap-header">Sign Up</h1>
      <div>
        <input class="snap-input " placeholder="Enter Your Email" name="user" type="email" ng-model="loginCtrl.user.email"> </div>
      <div>
        <input class="snap-input " placeholder="Your Desired Password" name="pass" type="password" ng-model="loginCtrl.user.password"> </div>
      <div>
        <button class="snap-submit-btn" type="submit">Sign Up</button>
      </div>
    </article>
  </section>
</form>